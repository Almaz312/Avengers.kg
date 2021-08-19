import style from "../styles/Home.module.css";


export default function Questions() {
    return (
        <div>
            <h1 className={style.advantageText}>Вопросы & Ответы</h1>
            <div className={style.questionsBlock}>
                <div className={style.questionsElem}>
                    <h4 className={style.questionsText}>Кто разработчики в базе WEBDINO, сколько их?</h4>
                </div>
                <div className={style.questionsElem}>
                    <h4 className={style.questionsText}>Все ли ваши эксперты свободно говорят по-русски/английски?</h4>
                </div>
                <div className={style.questionsElem}>
                    <h4 className={style.questionsText}>Каковы квалификационные критерии программистов в вашей компании?</h4>
                </div>
                <div className={style.questionsElem}>
                    <h4 className={style.questionsText}>Что делать, если меня не устраивает разработчик?</h4>
                </div>
                <div className={style.questionsElem}>
                    <h4 className={style.questionsText}>Вы также поставляете графических дизайнеров или руководителей проектов?</h4>
                </div>
                <div className={style.questionsElem}>
                    <h4 className={style.questionsText}>Какие способы оплаты вы принимаете?</h4>
                </div>
            </div>
        </div>
    );
};