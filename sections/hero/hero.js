import Link from 'next/link';
import Image from 'next/image';

import {hero, container, col_6, jarallax, bg_image, card,bg_cover, lower_img, d_block, fs_lg,k, more, col_4, col_5, even_bigger,small_title} from './hero.module.scss';

export default function Hero(){
    return(
        <section className={hero}>
            <div className={`container ${container}`}>
                <div className={`row ${more}`}>
                    <div className={col_4}>
                        <h1 className={small_title}>Professional Music Producer</h1>
                        <h3 className={even_bigger}>
                            We take care of your Music Career
                        </h3>
                        <p className={fs_lg}>
                            Want to book a session?
                            <Link href="/book">
                                <a>
                                    Click here.
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className={col_5}>
                        <div className={card}>
                            <div>
                                <h2>Iconic Hub</h2>
                            </div>
                            <div className={jarallax}>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={d_block}>

                </div>
                <div className={`row ${k}`}>
                    <div className={`col_6 ${col_6}`}>
                        <Image src="/hero.jpg" alt="hero" width={636} height={421} className={lower_img} />
                        <div className={jarallax}>
                            <div />
                        </div>
                    </div>
                </div>
            </div>

            <div className={bg_image}>
                <div className={bg_cover} style={{backgroundImage: 'url("./hero.jpg")'}}>

                </div>
            </div>
        </section>
    )
}