function Select() {
  return (
    <select className="border-b-1 border-b-black  p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
      <option value="">Numero de pessoas</option>
      <option value="opcao1">1 Pessoa</option>
      <option value="opcao2">2 Pessoas</option>
      <option value="opcao3">3 Pessoas</option>
      <option value="opcao4">4 Pessoas</option>
    </select>
  );
}

export default Select;
