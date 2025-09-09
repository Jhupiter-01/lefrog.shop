import { ThemeToggle } from '../../components/theme-toggle';

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>L</span>
          <h1>Lefrog.shop</h1>
        </div>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#galeria">Galería</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
