import {useState, useEffect} from 'react';
import {Terminal, Cpu, Database, Code, Zap, Globe, Layout, Server, Gamepad2, Rocket, Bot} from 'lucide-react';

const PixelArcade = () => {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(p => !p), 530);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (section) => console.log(`Navigating: ${section}`);

  const leftProjects = [
    {title: "PIXEL SPACESHIP", desc: "Pixel spaceships explore the games in pro.", icon: <Rocket size={20}/>},
    {title: "RETRO GAME", desc: "A retro game engine built for modern web.", icon: <Gamepad2 size={20}/>},
    {title: "ROBOT INTERFACE", desc: "Robot automation interface and bot controls.", icon: <Bot size={20}/>},
    {title: "RETRO GAME II", desc: "Launching a games window to explore.", icon: <Terminal size={20}/>},
  ];

  const rightProjects = [
    {title: "ULTIMATE UI", desc: "A component builder for game-used interfaces.", icon: <Layout size={20}/>},
    {title: "LINGO API", desc: "Develops a simple API for record storage.", icon: <Database size={20}/>},
    {title: "CASOLINE", desc: "Developers create own commerce mechanics.", icon: <Globe size={20}/>},
    {title: "REGIME I", desc: "Developer wise turn-based strategy effort.", icon: <Server size={20}/>},
  ];

  return (
    <div
      className="min-h-screen bg-[#110a1f] text-white font-pixel relative overflow-x-hidden selection:bg-green-400 selection:text-black">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2d1b4e] via-[#110a1f] to-[#000000]"></div>
        <div className="absolute top-20 left-20 w-1 h-1 bg-white animate-pulse" style={{boxShadow: "0 0 10px white"}}/>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 animate-pulse delay-75"/>
        <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-blue-300 opacity-60"/>
        <div className="absolute top-10 right-10 text-yellow-200 text-xs opacity-50">+</div>
        <div className="absolute bottom-10 right-20 text-blue-200 text-xs opacity-50">+</div>
      </div>

      <div
        className="fixed inset-0 z-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 flex flex-col h-full">

        <header className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-6xl text-center mb-8 tracking-widest uppercase relative group cursor-default">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-teal-600 drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
              XENOMORPHDEV
            </span>
            <span
              className="inline-block ml-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-bounce">
              👽
            </span>
          </h1>

          <nav
            className="bg-[#2d1b4e] border-4 border-[#4c3b73] rounded-2xl px-2 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)] inline-flex gap-4 relative">
            {/* Decorative shine on nav */}
            <div className="absolute top-1 left-4 right-4 h-1 bg-white/10 rounded-full"></div>

            {['PROJECTS', 'ABOUT', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="px-6 py-2 text-sm md:text-base font-bold text-gray-300 hover:text-white hover:bg-[#584285] rounded-xl transition-all uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
          </nav>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">

          <div className="lg:col-span-3 flex flex-col gap-6">
            {leftProjects.map((p, i) => (
              <ArcadeCard key={i} project={p}/>
            ))}
          </div>

          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[400px]">
            <div className="absolute top-0 right-20 text-purple-400 opacity-50 text-xl animate-bounce">👾</div>
            <div className="absolute bottom-10 left-10 text-cyan-400 opacity-50 text-xl animate-pulse">💾</div>

            <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
              <div
                className="absolute inset-10 bg-gradient-to-tr from-purple-600/30 to-cyan-600/30 blur-3xl rounded-full animate-pulse"></div>

              <div className="relative z-10 text-center transform hover:scale-105 transition-transform duration-500">
                <div className="text-9xl mb-4 drop-shadow-[0_0_25px_rgba(74,222,128,0.5)]">👨‍🚀</div>

                <div
                  className="absolute -top-4 -right-8 bg-[#1a1b26] border border-cyan-500/50 p-2 rounded text-[8px] text-green-400 font-mono text-left opacity-80 shadow-lg hidden md:block">
                  const world = new World();
                </div>
                <div
                  className="absolute bottom-10 -left-12 bg-[#1a1b26] border border-purple-500/50 p-2 rounded text-[8px] text-purple-300 font-mono text-left opacity-80 shadow-lg hidden md:block">
                  npm install universe
                </div>
              </div>
            </div>

            <div
              className="mt-[-20px] bg-[#110a1f]/80 px-6 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <p className="text-sm text-cyan-300 tracking-wider">
                {"> PRESS START TO BEGIN"}
                <span className={`ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}>_</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            {rightProjects.map((p, i) => (
              <ArcadeCard key={i} project={p} reverse/>
            ))}
          </div>

        </main>

        <section className="shrink-0 mb-2">
          <div className="flex items-center gap-4 mb-2 opacity-50">
            <div className="h-[1px] bg-purple-600 flex-grow"></div>
            <h2 className="text-xs text-purple-300 uppercase tracking-widest">Tech Inventory</h2>
            <div className="h-[1px] bg-purple-600 flex-grow"></div>
          </div>

          <div className="bg-[#1e1333] border-2 border-[#3a2860] rounded-lg p-3 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <StatItem label="REACT" value="98" color="text-cyan-400" barColor="bg-cyan-400"/>
              <StatItem label="VUE" value="85" color="text-green-400" barColor="bg-green-400"/>
              <StatItem label="TYPESCRIPT" value="90" color="text-blue-400" barColor="bg-blue-400"/>
              <StatItem label="NODE.JS" value="88" color="text-emerald-400" barColor="bg-emerald-400"/>
            </div>
          </div>
        </section>

        <footer className="text-center text-[10px] text-purple-400/50 mt-12">
          © 2026 XENOMORPHDEV // ALL RIGHTS RESERVED
        </footer>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .font-pixel { font-family: 'Press Start 2P', cursive; }
      `}</style>
    </div>
  );
};

const ArcadeCard = ({project, reverse}) => (
  <div
    className="group relative bg-[#1c1233] border-4 border-[#372661] hover:border-cyan-400 rounded-lg p-2 flex gap-3 items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-pointer h-28 overflow-hidden">

    <div
      className="w-20 h-20 bg-[#110a1f] border-2 border-[#4c3b73] shrink-0 rounded flex items-center justify-center group-hover:bg-[#1a1b2e] transition-colors">
      <div className="text-purple-400 group-hover:text-cyan-300 transition-colors">
        {project.icon}
      </div>
    </div>

    <div className="flex flex-col pt-1">
      <h3
        className="text-[10px] md:text-xs text-[#4ade80] mb-2 uppercase tracking-wide group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-[8px] md:text-[9px] text-gray-400 leading-relaxed font-sans">
        {project.desc}
      </p>
    </div>

    <div className="absolute top-0 right-0 p-1">
      <div className="w-2 h-2 bg-[#372661] group-hover:bg-cyan-400 transition-colors"></div>
    </div>
  </div>
);

const StatItem = ({label, value, color, barColor}) => (
  <div className="flex items-center gap-3 mb-3 w-full">
    <div className={`w-30 sm:w-34 text-xs md:text-sm ${color} font-bold text-right shrink-0`}>
      {label}
    </div>
    <div className="relative flex-1">
      <div className="w-full h-4 bg-[#110a1f] border-2 border-[#372661] relative rounded-sm overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${barColor} opacity-80`}
          style={{width: `${value}%`}}
        ></div>
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-30"></div>
      </div>
      <div
        className="absolute top-full right-0 mt-1 text-[8px] md:text-[12px] text-gray-500 font-mono tracking-tighter">
        {value}/100 EXP
      </div>
    </div>
  </div>
);

export default PixelArcade;