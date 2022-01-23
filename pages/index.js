import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src="/motifdidon.svg" alt="logo" height={30} width={230} />
            </a>
          </Link>
        </div>

        <div className={styles.navbar}>
          <p>Services / Blog / Shop</p>
        </div>
      </header> */}

      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon</h1>
        {/* <p className={styles.discription}>
          From automation of music processes to creating
          <br /> an engaged and driven culture.
        </p> */}

        {/* <div>
          <input type="email" placeholder="Please enter your email address" />
          <button type="button">Notify Me</button>
        </div>

        <p>-_ Notify me when the site is launched _-</p> */}
      </main>

      {/* <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()}, motifdidon.com, All Rights
          Reserved.
        </p>

        <div className={styles.socials}>
          <a href="fb" target="_blank">
            Fb
          </a>
        </div>
      </footer> */}
    </div>
  );
}
