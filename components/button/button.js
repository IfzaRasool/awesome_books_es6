import styles from './button.module.scss'

export default function Button({color}){
    return(
        <button className={`${styles.btn} ${styles[color]}`}>
            <span>
                Hire Me
            </span>
        </button>
    )
}