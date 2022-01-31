import Link from 'next/link'

import styles from './services.module.scss';

export default function Services(){
    return(
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.col_6}>
                    <div className={styles.widget_wrap}>
                        <div className={styles.spacer} />
                        <div className={styles.section_title}>
                            <span className={styles.divide}>
                                <span>our services</span>
                            </span>
                        </div>
                        <h2 className={styles.sec_title}>Services we Offer</h2>
                        <div className={styles.spacer} />
                        <div className={styles.service}>
                            <div className="container">
                                <div className={styles.col}>
                                    <div className={styles.populated} style={{backgroundImage: 'url(./service1.jpg)'}}>
                                        <div className={styles.bg_overlay} />
                                        <div className={styles.even_bigger_space} />
                                        <div className={styles.card_title}>
                                            <h4 className={styles.title_itself}>Voice Recording</h4>
                                        </div>
                                        <div className={styles.more_info}>
                                            <Link href="/">
                                                <a className={styles.info_link}>
                                                    <span className={styles.content_wrapper}>
                                                        <span className={styles.icon}>-&gt;</span>
                                                        <span className={styles.desc}>
                                                            View Details
                                                        </span>
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}