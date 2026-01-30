import {Terminal, Database, Globe, Layout as LayoutIcon, Server, Gamepad2, Rocket, Bot} from 'lucide-react';
import ArcadeCard from "../components/ArcadeCard";

const ProjectsPage = () => {

  const projects = [
    {title: "PIXEL SPACESHIP", desc: "Pixel spaceships explore the games in pro.", icon: <Rocket size={20}/>},
    {title: "RETRO GAME", desc: "A retro game engine built for modern web.", icon: <Gamepad2 size={20}/>},
    {title: "ROBOT INTERFACE", desc: "Robot automation interface and bot controls.", icon: <Bot size={20}/>},
    {title: "RETRO GAME II", desc: "Launching a games window to explore.", icon: <Terminal size={20}/>},
    {title: "ULTIMATE UI", desc: "A component builder for game-used interfaces.", icon: <LayoutIcon size={20}/>},
    {title: "LINGO API", desc: "Develops a simple API for record storage.", icon: <Database size={20}/>},
    {title: "CASOLINE", desc: "Developers create own commerce mechanics.", icon: <Globe size={20}/>},
    {title: "REGIME I", desc: "Developer wise turn-based strategy effort.", icon: <Server size={20}/>},
  ];

  return (
    <div
      className="w-full h-full flex flex-col items-center min-h-[50vh] border-4 border-[#372661] rounded-xl bg-[#1c1233]/50 p-4 md:p-8">
      <div className="text-center mb-6 md:mb-8">
        <h2
          className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-widest uppercase font-bold drop-shadow-sm">
          Project Archive
        </h2>
        <p className="text-[10px] md:text-xs text-purple-300/70 font-mono mt-2">
          // SELECT_FILE_TO_LOAD
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {projects.map((p, i) => (
          <div key={i} className="hover:scale-[1.02] transition-transform duration-200">
            <ArcadeCard project={p}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;