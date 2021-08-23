import style from "../styles/Home.module.css";
import styles from "../styles/Application.module.css"

export default function Application(props) {
    return (
        <div>
            <h1 className={style.advantageText}
                ref={props.commentApplication}>
                Оставить заявление</h1>
            <div className={styles.application}>
                <div className={style.container}>
                    <div className={styles.application}>
                        <div className={styles.info}>
                            <h4 className={styles.infoTextH4}>Поделимся опытом</h4>
                            <h6 className={styles.infoTextH6}>
                                Мы запускали разные проекты, поэтому можем подсказать, о чем
                                нужно подымать с самого начала, еще до разработки.
                            </h6>
                        </div>
                        <div className={styles.formBlock}>
                            <form className={styles.form}>
                                <input className={styles.text} type="text" required={true} placeholder="Представьтесь"></input>
                                <input className={styles.text} placeholder="Ваш email"></input>
                                <input className={styles.text} placeholder="Номер телефона"></input>
                                <textarea className={styles.textArea} placeholder="Текст"></textarea>
                                <button className={styles.btn} type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};