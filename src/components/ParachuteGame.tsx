import {useEffect, useRef, useState} from 'react';
import {X, RotateCcw} from 'lucide-react';

interface GameProps {
  onClose: () => void;
}

interface Point {
  x: number;
  y: number;
}

interface Missile {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  active: boolean;
  trail: Point[]
}

interface Explosion {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  active: boolean;
}

interface Enemy {
  x: number;
  y: number;
  speed: number;
  active: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

const ParachuteGame = ({onClose}: GameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Mutable Game State
  const gameState = useRef({
    missiles: [] as Missile[],
    explosions: [] as Explosion[],
    enemies: [] as Enemy[],
    particles: [] as Particle[],
    lastSpawn: 0,
    internalScore: 0, // Added: Track score inside Ref for the game loop
    isRunning: true
  });

  // --- INPUT HANDLING (Click to Shoot) ---
  const handleInput = (clientX: number, clientY: number) => {
    if (gameOver || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = 500 / rect.width;
    const scaleY = 500 / rect.height;

    const targetX = (clientX - rect.left) * scaleX;
    const targetY = (clientY - rect.top) * scaleY;

    gameState.current.missiles.push({
      x: 250,
      y: 480,
      targetX,
      targetY,
      speed: 8,
      active: true,
      trail: [{x: 250, y: 480}]
    });
  };

  // --- MAIN GAME LOOP ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 500;
    canvas.height = 500;

    let animationFrameId: number;

    const gameLoop = (timestamp: number) => {
      if (!gameState.current.isRunning) return;

      const state = gameState.current;

      // 1. CLEAR
      ctx.fillStyle = '#110a1f';
      ctx.fillRect(0, 0, 500, 500);

      // 2. GRID BACKGROUND
      ctx.strokeStyle = '#2d1b4e';
      ctx.lineWidth = 1;
      for (let i = 0; i < 500; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(500, i);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 500);
        ctx.stroke();
      }

      // 3. DRAW BASE
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(250, 480, 20, Math.PI, 0);
      ctx.fill();
      ctx.fillRect(245, 450, 10, 30);

      // --- LOGIC & UPDATE ---

      // A. Update Missiles
      state.missiles.forEach(m => {
        if (!m.active) return;
        const dx = m.targetX - m.x;
        const dy = m.targetY - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < m.speed) {
          m.active = false;
          state.explosions.push({
            x: m.targetX,
            y: m.targetY,
            radius: 1,
            maxRadius: 40,
            active: true
          });
          spawnParticles(m.targetX, m.targetY, '#22d3ee', 5);
        } else {
          m.x += (dx / dist) * m.speed;
          m.y += (dy / dist) * m.speed;
          if (Math.random() > 0.5) m.trail.push({x: m.x, y: m.y});
        }
      });

      // B. Update Explosions
      state.explosions.forEach(e => {
        if (!e.active) return;
        e.radius += 1.5;
        if (e.radius >= e.maxRadius) e.active = false;
      });

      // C. Update Particles
      state.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.05;
      });
      state.particles = state.particles.filter(p => p.life > 0);

      // D. Spawn Enemies (DIFFICULTY LOGIC ADDED HERE)
      // ----------------------------------------------
      // Base interval: 1200ms.
      // Difficulty: Reduce interval by 100ms for every 200 points scored.
      // Cap: Minimum interval is 300ms (insane mode).
      const difficultyReduction = Math.floor(state.internalScore / 200) * 100;
      const spawnInterval = Math.max(300, 1200 - difficultyReduction);

      // Speed Increase: Increase base speed slightly every 500 points
      const speedBoost = Math.floor(state.internalScore / 500) * 0.2;

      if (timestamp - state.lastSpawn > spawnInterval) {
        state.enemies.push({
          x: Math.random() * 460 + 20,
          y: -20,
          speed: (Math.random() * 0.8 + 0.5) + speedBoost,
          active: true
        });
        state.lastSpawn = timestamp;
      }
      // ----------------------------------------------

      // E. Enemy Logic & Collisions
      state.enemies.forEach(enemy => {
        if (!enemy.active) return;
        enemy.y += enemy.speed;

        state.explosions.forEach(expl => {
          if (!expl.active) return;
          const dist = Math.hypot(enemy.x - expl.x, enemy.y - expl.y);
          if (dist < expl.radius + 10) {
            enemy.active = false;

            state.internalScore += 50;
            setScore(s => s + 50);

            spawnParticles(enemy.x, enemy.y, '#f87171', 10);
          }
        });

        // Game Over
        if (enemy.y > 480 && enemy.active) {
          state.isRunning = false;
          setGameOver(true);
        }
      });

      state.missiles = state.missiles.filter(m => m.active);
      state.explosions = state.explosions.filter(e => e.active);
      state.enemies = state.enemies.filter(e => e.active);

      ctx.strokeStyle = 'rgba(34, 211, 238, 0.3)';
      state.missiles.forEach(m => {
        ctx.beginPath();
        ctx.moveTo(250, 480);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.fillRect(m.x - 1, m.y - 1, 3, 3);
      });

      state.explosions.forEach(e => {
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${1 - (e.radius / e.maxRadius)})`;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      state.enemies.forEach(e => {
        ctx.fillStyle = '#a78bfa';
        ctx.beginPath();
        ctx.arc(e.x, e.y, 12, Math.PI, 0);
        ctx.fill();
        ctx.strokeStyle = '#ccc';
        ctx.beginPath();
        ctx.moveTo(e.x - 12, e.y);
        ctx.lineTo(e.x, e.y + 15);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.x + 12, e.y);
        ctx.lineTo(e.x, e.y + 15);
        ctx.stroke();
        ctx.fillStyle = '#f87171';
        ctx.fillRect(e.x - 4, e.y + 15, 8, 8);
      });

      state.particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fillRect(p.x, p.y, 2, 2);
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameStarted]);

  const spawnParticles = (x: number, y: number, color: string, count: number) => {
    for (let i = 0; i < count; i++) {
      gameState.current.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 1.0,
        color
      });
    }
  };

  const restartGame = (e: React.MouseEvent) => {
    e.stopPropagation();
    gameState.current = {
      missiles: [], explosions: [], enemies: [], particles: [],
      lastSpawn: 0, internalScore: 0, isRunning: true
    };
    setScore(0);
    setGameOver(false);
    setGameStarted(prev => !prev);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black rounded-lg overflow-hidden border-2 border-[#372661] cursor-crosshair select-none touch-none"
      onClick={(e) => handleInput(e.clientX, e.clientY)}
    >
      <canvas ref={canvasRef} className="w-full h-full object-contain pointer-events-none"/>

      <div className="absolute top-2 left-4 font-mono text-xs text-green-400 pointer-events-none">
        SCORE: {score}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-2 right-2 text-gray-500 hover:text-white p-1 z-50"
      >
        <X size={20}/>
      </button>

      {gameOver && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-4 z-40">
          <h3 className="text-red-500 font-pixel text-2xl mb-4 animate-pulse">GAME OVER</h3>
          <p className="text-gray-300 font-mono text-sm mb-6">FINAL SCORE: {score}</p>
          <div className="flex gap-4">
            <button
              onClick={restartGame}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded flex items-center gap-2"
            >
              <RotateCcw size={16}/> RETRY
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 rounded"
            >
              EXIT
            </button>
          </div>
        </div>
      )}

      {!gameOver && (
        <div className="absolute bottom-2 w-full text-center text-[8px] text-gray-600 font-mono pointer-events-none">
          TAP SCREEN TO LAUNCH MISSILES
        </div>
      )}
    </div>
  );
};

export default ParachuteGame;