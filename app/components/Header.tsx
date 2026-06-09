"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            width={160}
            height={60}
            alt="Saúde e Vida"
            priority
          />
        </Link>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link href="/servicos/medicina-do-trabalho">
            Medicina do Trabalho
          </Link>

          <Link href="/servicos/seguranca-do-trabalho">
            Segurança do Trabalho
          </Link>

          <Link href="/servicos/exames-ocupacionais">Exames Admissionais</Link>
          <Link href={"/servicos/ltcat"}>LTCAT</Link>
          <Link href={"/servicos/pcmso"}>PCMSO</Link>
          <Link href={"/servicos/pgr"}>PGR</Link>
          <Link href={"/servicos/ergonomia"}>Ergonomia</Link>
          <Link href="/servicos/eSocial">eSocial</Link>

          <Link
            href="https://wa.me/553135323016?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            className="btnHeader"
            target="_blank"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
