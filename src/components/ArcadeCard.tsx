import type {JSX} from "react";

const ArcadeCard = ({project}: { project: { title: string; desc: string; icon: JSX.Element } }) => (
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

export default ArcadeCard;
