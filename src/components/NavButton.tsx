const NavButton = ({label, onClick, active}: { label: string; onClick: () => void; active?: boolean }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold 
               transition-all uppercase tracking-tight whitespace-nowrap w-full sm:w-auto text-center
               ${active ? 'text-white bg-[#584285]' : 'text-gray-300 hover:text-white hover:bg-[#584285]/50'}`}
  >
    {label}
  </button>
);

export default NavButton;