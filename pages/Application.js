import style from "../styles/Home.module.css";
import styles from "../styles/Application.module.css"

export default function Application() {
    return (
        <div>
            <h1 className={style.advantageText}>Оставить заявление</h1>
            <div className={styles.application}>
                <div>
                    <h4>Поделимся опытом</h4>
                    <h6>Мы запускали разные проекты, поэтому можем подсказать, о чем нужно подымать с самого начала, еще
                        до
                        разработки.</h6>
                </div>
                <div >
                    <form>
                        <input type="text" placeholder="Представьтесь"></input>
                        <input placeholder="Ваш email"></input>
                        <input placeholder="Номер телефона"></input>
                        <input placeholder="Текст"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};