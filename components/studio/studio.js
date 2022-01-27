import Link from 'next/link';
import { waves, title_layer_2, icon, callout } from '../footer/footer.module.scss';

export default function Studio({ href, logo, title, rent }) {
  return (
    <Link href={href}>
      <a>
        <div className={callout}>
          {rent ? (
            <svg
              width="245"
              height="79"
              viewBox="0 0 245 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={waves}
            >
              <path
    d="M3.94976 0H1.94976V8H0.94976V12H1.94976V79H3.94976V12H4.94976V8H3.94976V0ZM21.9498 0H23.9498V20H24.9498V24H23.9498V79H21.9498V24H20.9498V20H21.9498V0ZM41.9498 0H43.9498V8H44.9498V12H43.9498V79H41.9498V12H40.9498V8H41.9498V0ZM61.9498 0H63.9498V46H64.9498V50H63.9498V79H61.9498V50H60.9498V46H61.9498V0ZM81.9498 0H83.9498V28H84.9498V32H83.9498V79H81.9498V32H80.9498V28H81.9498V0ZM101.95 0H103.95V32H104.95V36H103.95V79H101.95V36H100.95V32H101.95V0ZM121.95 0H123.95V7H124.95V11H123.95V79H121.95V11H120.95V7H121.95V0ZM141.95 0H143.95V7H144.95V11H143.95V79H141.95V11H140.95V7H141.95V0ZM161.95 0H163.95V42H164.95V46H163.95V79H161.95V46H160.95V42H161.95V0ZM181.95 0H183.95V26H184.95V30H183.95V79H181.95V30H180.95V26H181.95V0ZM201.95 0H203.95V26H204.95V30H203.95V79H201.95V30H200.95V26H201.95V0ZM221.95 0H223.95V16H224.95V20H223.95V79H221.95V20H220.95V16H221.95V0ZM241.95 0H243.95V26H244.95V30H243.95V79H241.95V30H240.95V26H241.95V0Z"
    fill="url(#studio)"
    fillRule="evenodd"
    clipRule="evenodd"
    />
              <defs>
                <linearGradient
                  id="studio"
                  x1="122.95"
                  y1="0"
                  x2="17.0103"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#161616"/>
                  <stop offset="1" stopColor="#2B2B2B" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              width="309"
              height="85"
              viewBox="0 0 309 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={waves}
            >
              <path
    d="M36.25 0H38.25V85H36.25V0ZM20.25 11H18.25V74H20.25V11ZM2.25 22.5H0.25V62.5H2.25V22.5ZM56.25 11H54.25V74H56.25V11ZM72.25 22.5H74.25V62.5H72.25V22.5ZM92.25 34H90.25V51H92.25V34ZM108.25 22.5H110.25V62.5H108.25V22.5ZM128.25 11H126.25V74H128.25V11ZM144.25 0H146.25V85H144.25V0ZM164.25 11H162.25V74H164.25V11ZM180.25 22.5H182.25V62.5H180.25V22.5ZM200.25 34H198.25V51H200.25V34ZM216.25 22.5H218.25V62.5H216.25V22.5ZM236.25 11H234.25V74H236.25V11ZM252.25 0H254.25V85H252.25V0ZM272.25 11H270.25V74H272.25V11ZM288.25 22.5H290.25V62.5H288.25V22.5ZM308.25 34H306.25V51H308.25V34Z"
    fill="url(#records)"
    fillRule="evenodd"
    clipRule="evenodd"
    />
              <defs>
                <linearGradient
                  id="records"
                  x1="154.25"
                  y1="0"
                  x2="20.5232"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#161616"/>
                  <stop offset="1" stopColor="#2B2B2B" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          )}

          <div className={icon}>{logo}</div>
          <p className={title_layer_2}>{title}</p>
        </div>
      </a>
    </Link>
  );
}
