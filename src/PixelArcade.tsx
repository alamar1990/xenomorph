import {useState, useEffect} from 'react';
import type {JSX} from 'react';
import {Terminal, Database, Globe, Layout, Server, Gamepad2, Rocket, Bot} from 'lucide-react';

const PixelArcade = () => {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(p => !p), 530);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (section: string) => console.log(`Navigating: ${section}`);

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
      className="min-h-screen w-full bg-[#110a1f] text-white font-pixel relative overflow-x-hidden selection:bg-green-400 selection:text-black">
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
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 py-4 md:py-8 flex flex-col min-h-screen overflow-hidden">
        <header className="flex flex-col items-center mb-12">
          <h1
            className="w-full max-w-full text-center mb-4 sm:mb-8 tracking-wider sm:tracking-widest uppercase relative group cursor-default px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-2 md:gap-4">
              <span
                className="text-xl xs:text-2xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-teal-600 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] sm:drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] leading-tight">
                XENOMORPH
              </span>
              <span
                className="text-xl xs:text-2xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-teal-600 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] sm:drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] leading-tight">
                {'{DEV}'}
              </span>
              <span
                className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-bounce text-2xl sm:text-5xl ml-0 sm:ml-2 md:ml-4">
                👽
              </span>
            </div>
          </h1>

          <nav className="w-full max-w-xs sm:max-w-md mx-auto bg-[#2d1b4e] border-2 sm:border-4 border-[#4c3b73]
                rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-1 left-2 right-2 h-0.5 sm:h-1 bg-white/10 rounded-full hidden sm:block"></div>
            <div className="flex flex-col gap-1 sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#4c3b73]/50">
              {['PROJECTS', 'ABOUT', 'CONTACT'].map((item) => (
                <NavButton
                  key={item}
                  label={item}
                  onClick={() => handleNav(item)}
                />
              ))}
            </div>
          </nav>
        </header>

        <main
          className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16 w-full max-w-[2000px] mx-auto px-2 sm:px-4">
          {/* Left Projects Column */}
          <div
            className="col-span-4 lg:col-span-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
            {leftProjects.map((p, i) => (
              <div key={i} className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
                <ArcadeCard project={p}/>
              </div>
            ))}
          </div>

          {/* Center Content */}
          <div
            className="col-span-4 lg:col-span-2 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] p-2 sm:p-4">
            <div
              className="absolute top-2 right-2 sm:right-4 md:right-8 lg:right-12 text-purple-400 opacity-50 text-lg sm:text-xl md:text-2xl animate-bounce">👾
            </div>
            <div
              className="absolute bottom-4 left-2 sm:left-4 md:left-8 lg:left-12 text-cyan-400 opacity-50 text-lg sm:text-xl md:text-2xl animate-pulse">💾
            </div>

            <div
              className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[500px] aspect-square flex items-center justify-center">
              <div
                className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-10 bg-gradient-to-tr from-purple-600/30 to-cyan-600/30 blur-2xl md:blur-3xl rounded-full animate-pulse"></div>
              <div
                className="relative z-10 text-center transform hover:scale-105 transition-transform duration-500 w-full h-full flex flex-col items-center justify-center">
                <div
                  className="text-7xl sm:text-8xl md:text-9xl mb-2 sm:mb-3 md:mb-4 drop-shadow-[0_0_25px_rgba(74,222,128,0.5)]">👨‍🚀
                </div>
                <div
                  className="absolute -top-2 -right-4 sm:-top-3 sm:-right-6 md:-top-4 md:-right-8 bg-[#1a1b26] border border-cyan-500/50 p-1 sm:p-1.5 md:p-2 rounded text-[6px] sm:text-[7px] md:text-[8px] text-green-400 font-mono text-left opacity-80 shadow-lg hidden md:block">
                  const world = new World();
                </div>
                <div
                  className="absolute bottom-6 -left-8 sm:bottom-8 sm:-left-10 md:bottom-10 md:-left-12 bg-[#1a1b26] border border-purple-500/50 p-1 sm:p-1.5 md:p-2 rounded text-[6px] sm:text-[7px] md:text-[8px] text-purple-300 font-mono text-left opacity-80 shadow-lg hidden md:block">
                  npm install universe
                </div>
              </div>
            </div>

            <div
              className="mt-2 sm:mt-0 bg-[#110a1f]/80 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full border border-purple-500/30 backdrop-blur-sm w-auto">
              <p className="text-xs sm:text-sm text-cyan-300 tracking-wider whitespace-nowrap">
                {"> PRESS START TO BEGIN"}
                <span className={`ml-0.5 ${blink ? 'opacity-100' : 'opacity-0'}`}>_</span>
              </p>
            </div>
          </div>

          {/* Right Projects Column */}
          <div
            className="col-span-4 lg:col-span-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-2 sm:gap-3 md:gap-4 mt-4 lg:mt-0">
            {rightProjects.map((p, i) => (
              <div key={i} className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
                <ArcadeCard project={p}/>
              </div>
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

const NavButton = ({
                     label,
                     onClick
                   }: {
  label: string;
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className="px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold text-gray-300
               hover:text-white hover:bg-[#584285] transition-all uppercase tracking-tight
               whitespace-nowrap w-full sm:w-auto text-center"
  >
    {label}
  </button>
);

const ArcadeCard = ({project}: { project: { title: string, desc: string, icon: JSX.Element } }) => (
  <div
    className="group relative bg-[#1c1233] border-4 border-[#372661] hover:border-cyan-400 rounded-lg p-2 flex gap-3 items-center transition-all duration-200 cursor-pointer h-20 md:h-28 overflow-hidden">

    <div
      className="w-12 h-12 md:w-20 md:h-20 bg-[#110a1f] border-2 border-[#4c3b73] shrink-0 rounded flex items-center justify-center">
      <div className="scale-75 md:scale-100 text-purple-400 group-hover:text-cyan-300">
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

const StatItem = ({label, value, color, barColor}: {
  label: string,
  value: string,
  color: string,
  barColor: string
}) => (
  <div className="flex items-center gap-2 mb-5 w-full">
    <div className={`w-20 sm:w-34 text-[8px] md:text-sm ${color} font-bold text-right shrink-0`}>
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