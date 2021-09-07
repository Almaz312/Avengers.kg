import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Header(props) {
    function handleClick() {
        props.commentSection.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    function handleClickResource() {
        props.commentResources.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    function handleClickWork() {
        props.commentWork.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    function handleClickApplication() {
        props.commentApplication.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <span className={styles.headerElements}>
                <span className={styles.img}>
                    <Image src="/Avengers-Endgame-logo.jpeg" width={200} height={100}/>
                </span>
               <a className={styles.headerText}
                  onClick={handleClick}>
                   Аутстаффинг
               </a>
               <a className={styles.headerText}
                  onClick={handleClickWork}>
                    Как мы работаем ?
               </a>
               <a className={styles.headerText}
                  onClick={handleClickResource}>
                    Ресурсы и технологии
               </a>
               <a className={styles.headerText}
                  onClick={handleClickApplication}>
                   Контакты
               </a>
            </span>
                <button className={styles.btn}>
                    Оставить заявление
                </button>
            </div>
        </div>
    )
}