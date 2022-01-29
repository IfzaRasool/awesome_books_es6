import Image from 'next/image'
import Link from 'next/link'

import {nav_links} from "./data";

import {header, home_btn, nav, righter} from './header.module.scss';
import Button from "../button/button";

export default function Header(){
    return(
        <header className={header}>
            <Link href="/">
                <a className={home_btn}>
                    <Image src="/logo_traced.svg" width={43} height={56} alt="logo" />
                </a>
            </Link>

            <nav className={nav}>
                <div>
                    {
                        nav_links.map((link, index) => (
                            <Link key={index} href={`/${link}`}>
                                <a>
                                    <span>{link}</span>
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </nav>

            <div className={righter}>
                <Button color="primary" />
            </div>
        </header>
    )
}