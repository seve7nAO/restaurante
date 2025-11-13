import React from "react";
import Button from "./button";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-[var(--nav-bar)]  text-white p-4 flex items-center justify-between  mx-auto">
        <a href="#home" className="logo text-2xl md:text-3xl">
          Café Jhamylys
        </a>
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="lista">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="lista">
              Destaques
            </a>
          </li>

          <li>
            <a href="#menu" className="lista">
              Menu
            </a>
          </li>
          <li>
            <a href="#contact" className="lista">
              Contactos
            </a>
          </li>
        </ul>

        <Button href="#contact">Reservas</Button>
      </nav>
    </header>
  );
}
