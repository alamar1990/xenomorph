const StatItem = ({label, value, color, barColor}: {
  label: string;
  value: string;
  color: string;
  barColor: string
}) => (
  <div className="flex items-center gap-2 mb-5 w-full">
    <div className={`w-20 sm:w-34 text-[8px] md:text-sm ${color} font-bold text-right shrink-0`}>
      {label}
    </div>
    <div className="relative flex-1">
      <div className="w-full h-4 bg-[#110a1f] border-2 border-[#372661] relative rounded-sm overflow-hidden">
        <div className={`absolute top-0 left-0 h-full ${barColor} opacity-80`} style={{width: `${value}%`}}></div>
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

export default StatItem;
