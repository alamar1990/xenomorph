import {
  Terminal, Database, Globe, Layout as LayoutIcon, Server, Gamepad2, Rocket, Bot, Briefcase, Calendar,
  Download
} from 'lucide-react';
import ArcadeCard from "../components/ArcadeCard";
import resumePdf from "../assets/Alain Marquez Software Engineer.pdf";

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

  const experience = [
    {
      company: "Interocloud",
      role: "Senior Frontend Engineer",
      date: "Feb 2023 - Present",
      location: "Remote",
      stack: "Nuxt, Vue, Laravel, Docker",
      points: [
        "Built dynamic UIs resulting in 20% increased engagement.",
        "Refactored codebase leading to 40% faster development."
      ]
    },
    {
      company: "Smartbarrel",
      role: "Senior Web Developer",
      date: "Jan 2024 - Aug 2024",
      location: "Miami, FL",
      stack: "TS, Nuxt 3, Vue 3, PostgreSQL",
      points: [
        "Reduced page load times by 30% via component optimization.",
        "Cut deployment time by 40% by enhancing CI/CD pipelines."
      ]
    },
    {
      company: "Broadcasting Platforms",
      role: "FullStack Developer",
      date: "July 2021 - Mar 2023",
      location: "Remote",
      stack: "Nuxt, Laravel, Docker, SQL",
      points: [
        "Improved GPS tracking accuracy by 40% for fleet clients.",
        "Optimized DB queries reducing load times by 50%."
      ]
    }
  ];

  return (
    <div
      className="w-full h-full min-h-[50vh] border-4 border-[#372661] rounded-xl bg-[#1c1233]/50 p-4 md:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-8">

      <div className="lg:col-span-6 lg:order-2 flex flex-col">
        <div className="flex items-center justify-between mb-6 border-b border-[#372661] pb-2">

          <div className="flex items-center gap-3">
            <Briefcase className="text-cyan-400 animate-pulse" size={24}/>
            <h2
              className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-widest uppercase font-bold">
              Career Log
            </h2>
          </div>
          <a
            href={resumePdf}
            download="Alain_Marquez_Software_Engineer.pdf"
            className="flex items-center gap-2 px-3 py-1.5 bg-[#110a1f] border border-cyan-500/30 rounded text-[10px] text-cyan-300 font-mono uppercase tracking-wider hover:bg-[#2d1b4e] hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all group"
            title="Download Full Resume"
          >
            <span className="hidden sm:inline">DOWNLOAD FULL RESUME</span>
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform"/>
          </a>
        </div>
        <div className="relative pl-2">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent"></div>

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-8 group">
                <div
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#110a1f] border-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:bg-cyan-400 transition-colors z-10"></div>

                <div
                  className="bg-[#110a1f]/40 border border-[#372661] hover:border-cyan-500/50 p-4 rounded-lg transition-all hover:translate-x-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">{job.role}</h3>
                  </div>

                  <div
                    className="flex flex-wrap items-center gap-x-4 text-[10px] text-purple-300 font-mono mb-2 opacity-80">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={10} className="flex-shrink-0"/> {job.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Calendar size={10} className="flex-shrink-0"/> {job.date}
                    </span>
                  </div>

                  <div className="text-[9px] text-gray-500 font-mono mb-3 border-b border-[#372661]/50 pb-2">
                    [{job.stack}]
                  </div>

                  <ul className="list-none space-y-1">
                    {job.points.map((pt, j) => (
                      <li key={j}
                          className="text-[10px] md:text-[11px] text-gray-400 leading-tight pl-2 border-l-2 border-purple-500/30">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 lg:order-1 flex flex-col">

        <div
          className="text-center lg:text-left mb-6 border-b border-[#372661] pb-2 flex items-center justify-center lg:justify-between gap-3">
          <div className="flex items-center gap-3">
            <Rocket className="text-purple-400 animate-pulse" size={24}/>
            <h2
              className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 tracking-widest uppercase font-bold">
              Project Archive
            </h2>
          </div>
          <p className="hidden lg:block text-[10px] text-purple-300/50 font-mono">
            // SELECT_FILE
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {projects.map((p, i) => (
            <div key={i} className="hover:scale-[1.02] transition-transform duration-200">
              <ArcadeCard project={p}/>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectsPage;