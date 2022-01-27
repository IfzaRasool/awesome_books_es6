import {
  footer,
  socials,
  socials_wrapper,
  cover,
  title_layer,
  nav,
  nav_wrapper,
  meta,
  copy,
  logo,
  studio,
  navigation,
  footer_wrapper,
} from './footer.module.scss';
import { socials_icons } from './data';
import Link from 'next/link';
import Studio from '../studio/studio';

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={socials}>
        <div className={socials_wrapper}>
          <div className={cover}>
            <h3 className={title_layer}>Follow Me</h3>
          </div>
          <ul>
            {socials_icons.map((icon, index) => (
              <li key={index}>
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                  <div dangerouslySetInnerHTML={{ __html: icon.svg }} />
                  <p>{icon.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={footer_wrapper}>
        <nav className={navigation}>
          <Link href="/about">
            <a>
              <h3>About</h3>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <h3>Services</h3>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <h3>Works</h3>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <h3>merch</h3>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <h3>Contact</h3>
            </a>
          </Link>
        </nav>
        <div className={nav}>
          <div className={nav_wrapper}>
            <div className={studio}>
              <Studio
                href="/contact"
                logo="Iconic Hub"
                title="Got any tunes?"
                rent={false}
              />
              <Studio
                href="/contact"
                logo="Iconic Hub"
                title="rent the studio"
                rent={true}
              />
            </div>

            <div className={meta}>
              <div className={copy}>
                <Link href="/">
                  <a>
                    <div className={logo}>Motif Di Don</div>
                  </a>
                </Link>
                <p>&copy; {new Date().getFullYear()} MotifDiDon</p>
              </div>

              <div>
                <ul>
                  <li>
                    <a href="/terms">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/cookies">Cookies Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
