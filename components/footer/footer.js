import {
  footer,
  meta,
  copy,
  logo,
  studio,
  navigation,
  footer_wrapper,
  title_layer_2
} from './footer.module.scss';
import Link from 'next/link';
import Studio from '../studio/studio';
import {footer_nav_data} from "./data";

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={footer_wrapper}>
        {/* navigation */}
        <nav className={navigation}>
          {
            footer_nav_data.map((link, index) => (
                <Link key={index} href={`/${link}`}>
                  <a>
                    <h3 className={title_layer_2}>{link}</h3>
                  </a>
                </Link>
            ))
          }
        </nav>

        {/* studios */}
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
    </footer>
  );
}
