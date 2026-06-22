"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/constants/whatsapp";
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="headerTop">
        <div className="headerTopContainer">
          <a className="headerInfo" href="tel:+553135323016">
            <Phone size={14} />
            <span>(31) 3532-3016</span>
          </a>

          <a
            className="headerInfo"
            href="mailto:adm.financeiro@saudevidamed.com.br"
          >
            <Mail size={14} />
            <span>adm.financeiro@saudevidamed.com.br</span>
          </a>
          <a
            className="headerInfo"
            href="https://instagram.com/saudevidaocupacional"
          >
            <FaInstagram size={14} />

            <span>@saudevidaocupacional</span>
          </a>
        </div>
      </div>
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
          <Link href="/">Home</Link>

          <div className="dropdown">
            <button className="dropdownBtn">Serviços</button>

            <div className="dropdownMenu">
              <Link href="/servicos/medicina-do-trabalho">
                Medicina do Trabalho
              </Link>

              <Link href="/servicos/seguranca-do-trabalho">
                Segurança do Trabalho
              </Link>

              <Link href="/servicos/exames-ocupacionais">
                Exames Ocupacionais
              </Link>

              <Link href="/servicos/pcmso">PCMSO</Link>

              <Link href="/servicos/pgr">PGR</Link>

              <Link href="/servicos/ltcat">LTCAT</Link>

              <Link href="/servicos/ergonomia">Ergonomia</Link>

              <Link href="/servicos/eSocial">eSocial SST</Link>

              <Link href="/servicos/avaliacoes-ambientais">
                Avaliações Ambientais
              </Link>

              <Link href="/servicos/treinamentos-sst">Treinamentos SST</Link>
            </div>
          </div>

          <Link href="/#contato">Contato</Link>

          <Link href={whatsappUrl} className="btnHeader2" target="_blank">
            Solicitar Orçamento
          </Link>
        </nav>
        {menuOpen && (
          <div className="menuOverlay" onClick={() => setMenuOpen(false)} />
        )}
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
