import { Link } from 'react-router-dom';
import { Container } from './Container';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--background-alt)]">
      <Container className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-[2.2rem] leading-none tracking-[-0.04em] text-[var(--text-primary)]">The Reset Room</p>
            <p className="mt-5 max-w-xs text-[0.98rem] leading-7 text-[var(--text-secondary)]">
              A safe space to finally exhale.
            </p>
            <p className="mt-4 text-[0.95rem] text-[var(--text-secondary)]">Online wellness counselling</p>
            <p className="text-[0.95rem] text-[var(--text-secondary)]">Cape Town · South Africa</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">Explore</h3>
            <ul className="mt-5 space-y-3 text-[0.97rem] text-[var(--text-secondary)]">
              {['Home', 'About', 'Services', 'Contact'].map((label) => {
                const to = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
                return (
                  <li key={label}>
                    <Link to={to} className="transition-colors hover:text-[var(--text-primary)]">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">Connect</h3>
            <ul className="mt-5 space-y-3 text-[0.97rem] text-[var(--text-secondary)]">
              <li><a href="https://instagram.com/the_reset_room_counselling" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">Instagram</a></li>
              <li><a href="https://facebook.com/theresetroom.counselling" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">Facebook</a></li>
              <li><a href="mailto:bilqees@theresetroom.co.za" className="hover:text-[var(--text-primary)]">Email</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">Sessions</h3>
            <div className="mt-5 space-y-2 text-[0.97rem] text-[var(--text-secondary)]">
              <p>Monday-Friday</p>
              <p>09:00-16:00</p>
              <p>Online via Google Meet</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-secondary)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} The Reset Room. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-[var(--text-primary)]">Privacy Policy</Link>
              <a href="https://www.anchornoirstudios.co.za/" target="_blank" rel="noreferrer" className="text-[#1e90ff] underline decoration-[#1e90ff]/60 underline-offset-4 transition-colors hover:text-[#0d6efd]">
                Website by AnchorNoir Studios
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
