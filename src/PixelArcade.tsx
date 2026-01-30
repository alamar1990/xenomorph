import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Terminal, Database, Globe, Layout as LayoutIcon, Server, Gamepad2, Rocket, Bot} from 'lucide-react';
import Layout from "./Layout.tsx";
import StatItem from "./components/StatItem.tsx";
import ArcadeCard from "./components/ArcadeCard.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const PixelArcade = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(p => !p), 530);
    return () => clearInterval(interval);
  }, []);

  const leftProjects = [
    {title: "PIXEL SPACESHIP", desc: "Pixel spaceships explore the games in pro.", icon: <Rocket size={20}/>},
    {title: "RETRO GAME", desc: "A retro game engine built for modern web.", icon: <Gamepad2 size={20}/>},
    {title: "ROBOT INTERFACE", desc: "Robot automation interface and bot controls.", icon: <Bot size={20}/>},
    {title: "RETRO GAME II", desc: "Launching a games window to explore.", icon: <Terminal size={20}/>},
  ];

  const rightProjects = [
    {title: "ULTIMATE UI", desc: "A component builder for game-used interfaces.", icon: <LayoutIcon size={20}/>},
    {title: "LINGO API", desc: "Develops a simple API for record storage.", icon: <Database size={20}/>},
    {title: "CASOLINE", desc: "Developers create own commerce mechanics.", icon: <Globe size={20}/>},
    {title: "REGIME I", desc: "Developer wise turn-based strategy effort.", icon: <Server size={20}/>},
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
        {/* Left Projects */}
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

        {/* Right Projects */}
        <div
          className="col-span-4 lg:col-span-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-2 sm:gap-3 md:gap-4 mt-4 lg:mt-0">
          {rightProjects.map((p, i) => (
            <div key={i} className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
              <ArcadeCard project={p}/>
            </div>
          ))}
        </div>
      </div>

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
    </>
  );
};

export default PixelArcade;