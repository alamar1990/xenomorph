const NavButton = ({label, onClick, active}: { label: string; onClick: () => void; active?: boolean }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold
               transition-all uppercase tracking-tight whitespace-nowrap w-full sm:w-auto text-center
               outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50
               ${active
      ? 'text-cyan-300 bg-[#584285] border-y-3 sm:border-y-0 sm:border-x-3 border-cyan-400 shadow-[inset_0_0_20px_rgba(34,211,238,0.15)]'
      : 'text-gray-300 hover:text-white hover:bg-[#584285]/50 border-y-3 sm:border-y-0 sm:border-x-3 border-transparent'}`}
  >
    {label}
  </button>
);

export default NavButton;