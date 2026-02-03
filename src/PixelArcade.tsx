import {useState, useEffect} from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Layout.tsx";
import StatItem from "./components/StatItem.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ParachuteGame from "./components/ParachuteGame.tsx"; // Import the game

interface CodeSnippet {
  text: string;
  color: string;
  border: string;
  anim: string;
  style?: React.CSSProperties;
}

const PixelArcade = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
};

const Home = () => {
  const [blink, setBlink] = useState(true);
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  // New State for Game Mode
  const [isPlaying, setIsPlaying] = useState(false);

  const rawSnippets = [
    {text: "const world = new World();", color: "text-green-400", border: "border-cyan-500/50", anim: "animate-pulse"},
    {text: "npm install universe", color: "text-purple-300", border: "border-purple-500/50", anim: "animate-bounce"},
    {text: "git push origin master --force", color: "text-red-400", border: "border-red-500/50", anim: "animate-pulse"},
    {text: "while(alive) { code(); }", color: "text-yellow-300", border: "border-yellow-500/50", anim: "animate-pulse"},
    {text: "sudo rm -rf /bugs", color: "text-blue-300", border: "border-blue-500/50", anim: "animate-pulse"},
    {
      text: "import { Chaos } from 'entropy';",
      color: "text-pink-400",
      border: "border-pink-500/50",
      anim: "animate-pulse"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => setBlink(p => !p), 530);

    const randomized = rawSnippets.map(snippet => {
      const randomTop = Math.floor(Math.random() * 110) - 10;
      const randomLeft = Math.floor(Math.random() * 120) - 20;
      const randomDelay = Math.random() * 2;

      return {
        ...snippet,
        style: {
          top: `${randomTop}%`,
          left: `${randomLeft}%`,
          animationDelay: `${randomDelay}s`
        }
      };
    });

    setSnippets(randomized);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[2000px] px-2 sm:px-4">
          <div
            className="flex flex-col items-center justify-center w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] relative p-2 sm:p-4">

            {/* Background Floating Icons - Always visible */}
            <div
              className="absolute top-2 right-2 sm:right-4 md:right-8 lg:right-12 text-purple-400 opacity-50 text-lg sm:text-xl md:text-2xl animate-bounce">👾
            </div>
            <div
              className="absolute bottom-4 left-2 sm:left-4 md:left-8 lg:left-12 text-cyan-400 opacity-50 text-lg sm:text-xl md:text-2xl animate-pulse">💾
            </div>

            {/* MAIN CONTENT AREA: Swaps between Astronaut and Game */}
            <div
              className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[500px] aspect-square flex flex-col items-center justify-center">

              {isPlaying ? (
                // 1. GAME COMPONENT
                <ParachuteGame onClose={() => setIsPlaying(false)}/>
              ) : (
                // 2. ASTRONAUT DASHBOARD (Existing)
                <>
                  <div
                    className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-10 bg-gradient-to-tr from-purple-600/30 to-cyan-600/30 blur-2xl md:blur-3xl rounded-full animate-pulse"></div>

                  <div
                    className="relative z-10 w-full h-full flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500">
                    <div
                      className="text-7xl sm:text-8xl md:text-9xl mb-2 sm:mb-3 md:mb-4 drop-shadow-[0_0_25px_rgba(74,222,128,0.5)]">
                      👨‍🚀
                    </div>

                    {snippets.map((snippet, idx) => (
                      <div
                        key={idx}
                        style={snippet.style}
                        className={`absolute bg-[#1a1b26] border ${snippet.border} p-1 sm:p-1.5 md:p-2 rounded text-[6px] sm:text-[7px] md:text-[8px] ${snippet.color} font-mono text-left opacity-80 shadow-lg hidden md:block hover:scale-110 transition-transform cursor-help select-none ${snippet.anim}`}
                      >
                        {snippet.text}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* PRESS START BUTTON (Only visible if game NOT playing) */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="mt-2 sm:mt-0 bg-[#110a1f]/80 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full border border-purple-500/30 backdrop-blur-sm hover:bg-[#2d1b4e] hover:border-cyan-400 transition-all group cursor-pointer"
              >
                <p className="text-xs sm:text-sm text-cyan-300 tracking-wider whitespace-nowrap group-hover:text-white">
                  {"> PRESS START TO BEGIN"}
                  <span className={`ml-0.5 ${blink ? 'opacity-100' : 'opacity-0'}`}>_</span>
                </p>
              </button>
            )}

          </div>
        </div>
      </div>

      <section className="shrink-0 mb-2">
        {/* ... Tech Inventory (Unchanged) ... */}
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