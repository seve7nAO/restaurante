// Button.jsx
function Button({ href = "#", children }) {
  return (
    <a
      href={href}
      role="button"
      className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 font-medium tracking-wide cursor-pointer
        transition-all duration-300 hover:bg-[#4b2e20] hover:text-[#f5f3ef] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
        active:scale-95"
    >
      {children}
    </a>
  );
}

export default Button;
