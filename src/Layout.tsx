import {Outlet, useLocation, useNavigate} from "react-router-dom";
import NavButton from "./components/NavButton.tsx";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation Handler
  const handleNav = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className="min-h-screen w-full bg-[#110a1f] text-white font-pixel relative overflow-x-hidden selection:bg-green-400 selection:text-black flex flex-col">
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
        className="relative z-10 w-full max-w-7xl mx-auto px-4 py-4 md:py-8 flex flex-col flex-grow min-h-screen overflow-hidden">

        <header className="flex flex-col items-center mb-12 shrink-0">
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

          <nav
            className="w-full max-w-xs sm:max-w-md mx-auto bg-[#2d1b4e] border-2 sm:border-4 border-[#4c3b73] rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="flex flex-col gap-1 sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#4c3b73]/50">
              <NavButton label="HOME" onClick={() => handleNav('/')} active={location.pathname === '/'}/>
              <NavButton label="PROJECTS" onClick={() => handleNav('/projects')}
                         active={location.pathname === '/projects'}/>
              <NavButton label="ABOUT" onClick={() => handleNav('/about')} active={location.pathname === '/about'}/>
              <NavButton label="CONTACT" onClick={() => handleNav('/contact')}
                         active={location.pathname === '/contact'}/>
            </div>
          </nav>
        </header>

        <main className="flex-grow w-full max-w-[2000px] mx-auto px-2 sm:px-4">
          <Outlet/>
        </main>

        <footer className="text-center text-[10px] text-purple-400/50 mt-12 pb-4 shrink-0">
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
