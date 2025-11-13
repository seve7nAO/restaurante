function Input({ type, placeholder, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border-b-1 border-b-black   p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${className}`}
    />
  );
}

export default Input;
