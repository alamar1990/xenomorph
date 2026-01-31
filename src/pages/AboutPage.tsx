import {Download, User, Github, Linkedin, MapPin, Clock, Cpu} from 'lucide-react';
import xenomorphAvatar from '../assets/xenomorph.gif';
import resumePdf from '../assets/Alain Marquez Software Engineer.pdf';

const AboutPage = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center min-h-[50vh] border-4 border-[#372661] rounded-xl bg-[#1c1233]/50 p-6 md:p-8 relative overflow-hidden">

      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-pulse"></div>

      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <div className="bg-[#1c1233] p-2 rounded-lg border border-[#372661]">
          <User className="text-green-400 animate-pulse" size={24}/>
        </div>
        <h2
          className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 tracking-widest uppercase font-bold drop-shadow-sm">
          Operator Profile
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-5xl items-stretch">

        <div className="md:col-span-5 flex flex-col gap-4 h-full">

          <div
            className="bg-[#110a1f]/60 border-2 border-[#372661] p-4 rounded-lg relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div
                className="w-16 h-16 bg-black border-2 border-green-400 rounded overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <img src={xenomorphAvatar} alt="Xenomorph Avatar" className="w-full h-full object-cover"/>
              </div>
              <div>
                <h3 className="text-white font-bold tracking-wider text-lg">ALAIN MARQUEZ</h3>
                <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono mt-1">
                  <span className="bg-cyan-900/30 px-1 rounded border border-cyan-500/30">LVL.86</span>
                  <span>SOFTWARE ENGINEER</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#372661]/50">
              <div className="flex items-center gap-2 text-[10px] text-gray-400">
                <MapPin size={12} className="text-purple-400"/>
                <span>EARTH (C-137)</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-400">
                <Clock size={12} className="text-purple-400"/>
                <span>UTC -05:00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-grow">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 pl-1">Data Uplinks</div>

            <SocialButton
              icon={<Github size={18}/>}
              label="GITHUB_REPO"
              href="https://github.com/alamar1990"
              color="hover:border-white hover:text-white hover:bg-white/10"
            />
            <SocialButton
              icon={<Linkedin size={18}/>}
              label="LINKEDIN_NET"
              href="https://linkedin.com/in/alain-marquez/"
              color="hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10"
            />
          </div>

          <div className="bg-[#110a1f]/40 p-3 rounded-lg border border-[#372661]">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 flex justify-between items-center">
              <span>Equipped Mods</span>
              <Cpu size={12} className="text-green-500 animate-pulse"/>
            </div>
            <div className="flex flex-wrap gap-2">
              <SkillChip label="REACT"/>
              <SkillChip label="NEXT.JS"/>
              <SkillChip label="TAILWIND"/>
              <SkillChip label="VUE"/>
              <SkillChip label="NUXT"/>
              <SkillChip label="LEAFLET"/>
              <SkillChip label="MAPBOX"/>
              <SkillChip label="FIGMA"/>
              <SkillChip label="DOCKER"/>
            </div>
          </div>

        </div>

        <div className="md:col-span-7 flex flex-col gap-4 h-full">

          <div
            className="group bg-[#110a1f]/40 p-1 rounded-xl border border-[#372661]/50 backdrop-blur-md flex-grow flex flex-col hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-500 min-h-[300px]">
            <div className="bg-[#1c1233] px-4 py-2 rounded-t-lg border-b border-[#372661]/50 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              <div className="ml-auto text-[10px] text-gray-500 font-mono">user@xenomorph:~</div>
            </div>

            <div
              className="p-6 font-mono text-xs md:text-sm text-gray-300 leading-relaxed space-y-5 flex-1 relative overflow-hidden">
              <p className="flex items-center gap-2 opacity-80">
                <span className="text-green-400 font-bold">➜</span>
                <span className="text-cyan-300">./run_intro.sh</span>
              </p>

              <div className="pl-4 border-l-2 border-purple-500/20 ml-1">
                <p className="mb-4">
                  Hey there. I'm a <span
                  className="text-cyan-400 font-bold hover:underline cursor-help decoration-dotted decoration-purple-500 underline-offset-4">Full Stack Dev</span> who
                  builds things for the web because I genuinely love it.
                </p>
                <p>
                  I don’t just write code. I care about how it feels to use. I love mixing <span
                  className="text-purple-300 italic">retro aesthetic</span> with modern performance and building things
                  that are fast, look cool, and feel smooth from the first click.
                </p>
              </div>

              <p className="flex flex-col gap-1">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Current Quest</span>
                <span className="text-purple-200">
                <span className="text-green-400 mr-2">{'>'}</span>
                Making the web fun again, one pixel at a time.
                </span>
              </p>

              <div
                className="mt-auto pt-4 border-t border-dashed border-gray-700 flex items-center justify-between text-[10px] uppercase tracking-wider">
                <span className="text-gray-500">System Status:</span>
                <span className="flex items-center gap-2 text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Online
                </span>
              </div>

              <div className="absolute bottom-4 left-6 w-2 h-4 bg-cyan-400 animate-pulse hidden md:block"></div>
            </div>
          </div>

          <a
            href={resumePdf}
            download="Alain_Marquez_Software_Engineer.pdf"
            className="group relative w-full bg-gradient-to-r from-[#2d1b4e] to-[#1c1233] hover:from-[#4c3b73] hover:to-[#2d1b4e] border-2 border-green-500/30 hover:border-green-400 p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.2)] hover:-translate-y-1 overflow-hidden"
          >
            <div className="flex flex-col items-start z-10">
              <span
                className="text-[10px] text-green-300/70 uppercase tracking-widest mb-1 group-hover:text-green-300 transition-colors">System Data Log</span>
              <span
                className="text-lg md:text-xl font-bold tracking-wider text-white group-hover:text-green-50 transition-colors">DOWNLOAD RESUME</span>
            </div>

            <div
              className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/20 group-hover:scale-110 transition-all z-10 border border-green-500/20">
              <Download size={24} className="text-green-400"/>
            </div>

            <div
              className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[25deg] group-hover:animate-[shimmer_1s_infinite]"></div>
          </a>

        </div>

      </div>
    </div>
  );
};

const SocialButton = ({icon, label, href, color}: { icon: any, label: string, href: string, color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 bg-[#110a1f]/80 p-3 rounded border border-[#372661] text-gray-400 transition-all duration-300 group ${color}`}
  >
    <div className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-xs font-mono tracking-wide">{label}</span>
    <div className="ml-auto opacity-0 group-hover:opacity-100 text-[10px]">➜</div>
  </a>
);

const SkillChip = ({label}: { label: string }) => (
  <div
    className="bg-[#2d1b4e] text-purple-200 text-[10px] px-2 py-1 rounded border border-purple-500/30 hover:border-cyan-400 hover:text-cyan-300 hover:bg-[#2d1b4e]/80 transition-colors cursor-default">
    {label}
  </div>
);

export default AboutPage;