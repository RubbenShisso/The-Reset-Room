import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from './Container';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getNavLinkClasses = (isActive: boolean) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
    }`;

  const getMobileNavLinkClasses = (isActive: boolean) =>
    `block rounded-full px-4 py-3 text-base font-medium ${
      isActive ? 'bg-[var(--reset-blue-50)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[rgba(250,253,253,0.88)] backdrop-blur-sm shadow-[0_1px_0_rgba(114,214,220,0.16)]'
          : 'bg-transparent'
      }`}
    >
      <Container className="relative flex items-center justify-between py-4">
        <Link to="/" className="flex items-center" aria-label="The Reset Room home">
          <span className="font-serif text-[1.7rem] leading-none tracking-[-0.04em] text-[var(--text-primary)]">
            The Reset Room
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => getNavLinkClasses(isActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/contact?intent=booking"
            className="inline-flex items-center justify-center rounded-full bg-[var(--reset-turquoise)] px-5 py-3 text-sm font-medium text-[var(--white)] transition-colors hover:bg-[var(--reset-aqua)]"
          >
            Book a Session
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,252,247,0.7)] text-[var(--text-primary)] md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
          <Container className="space-y-2 py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => getMobileNavLinkClasses(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact?intent=booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[var(--reset-turquoise)] px-5 py-3 text-sm font-medium text-[var(--white)] hover:bg-[var(--reset-aqua)]"
            >
              Book a Session
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
