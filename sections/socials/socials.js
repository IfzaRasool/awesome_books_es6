//styles
import {socials, socials_wrapper, cover, title_layer_3, p_layer_3} from './socials.module.scss'
import {socials_icons} from './data';

export default function Socials(){
    return(
        <section className={socials}>
            <div className={socials_wrapper}>
                <div className={cover}>
                    <h3 className={title_layer_3}>
                        Follow Me
                    </h3>
                </div>

                <ul>
                    {socials_icons.map((icon, index) => (
                        <li key={index}>
                            <a href={icon.url} target="_blank" rel="noopener noreferrer">
                                <div dangerouslySetInnerHTML={{ __html: icon.svg }} />
                                <p className={p_layer_3}>{icon.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}