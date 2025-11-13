import React, { useState } from "react";
import Button from "./button";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--nav-bar)] text-white shadow-md">
      <nav className="p-4 flex items-center justify-between mx-auto max-w-6xl">
        <a href="#home" className="logo text-2xl md:text-3xl font-semibold">
          Café Jhamylys
        </a>

        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#home" className="lista hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="lista hover:text-yellow-400 transition">
              Destaques
            </a>
          </li>
          <li>
            <a href="#menu" className="lista hover:text-yellow-400 transition">
              Menu
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="lista hover:text-yellow-400 transition"
            >
              Contactos
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <Button href="#contact">Reservas</Button>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[var(--nav-bar)] text-center py-4 space-y-4 border-t border-white/10">
          <a
            href="#home"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Destaques
          </a>
          <a
            href="#menu"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </a>
          <a
            href="#contact"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contactos
          </a>
          <Button href="#contact">Reservas</Button>
        </div>
      )}
    </header>
  );
}
