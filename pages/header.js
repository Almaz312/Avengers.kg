import styles from '../styles/Home.module.css'
import Logo from "../svg/logo";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <span className={styles.headerElements}>
                <span className={styles.img}><Logo/></span>
               <a className={styles.headerText}>Аутстаффинг</a>
               <a className={styles.headerText}>Как мы работаем ?</a>
               <a className={styles.headerText}>Ресурсы и технологии</a>
               <a className={styles.headerText}>Контакты</a>
            </span>
                <button className={styles.btn}>Оставить заявление</button>
            </div>
        </div>
    )
}