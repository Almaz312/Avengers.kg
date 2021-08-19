import style from "../styles/Home.module.css";
import "../styles/work.module.css"
import '../styles/Home.module.css'
import Image from "next/image";


export default function Work() {
    return (
        <div className={style.container}>
            <h6 className={style.advantageText}>Как мы работаем ?</h6>
            <div className={style.workBlockElem}>
                <div className={style.workBlock}>
                    <Image src="/to-do-list.png" width={130} height={130}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Требования</h3>
                        <h6 className={style.workH6}>Вместе обсудим задачу и процесс работы над ней.</h6>
                    </span>
                </div>
                <div className={style.workBlock}>
                    <Image src="/list.png" width={130} height={130}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Подбор</h3>
                        <h6 className={style.workH6}>Поиск подходящих кандидатов под требования проекта.</h6>
                    </span>
                </div>
                <div className={style.workBlock}>
                    <Image src="/free-icon-job-interview-1436662.png" width={130} height={130}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Собеседование</h3>
                        <h6 className={style.workH6}>Вы лично проверите квалификацию и компетенцию, предложенных нами кандидатов. </h6>
                    </span>
                </div>
                <div className={style.workBlock}>
                    <Image src="/free-icon-agreement-4751811.png" width={130} height={130}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Заключение договора</h3>
                        <h6 className={style.workH6}>Вы лично проверите квалификацию и компетенцию, предложенных нами кандидатов. </h6>
                    </span>
                </div>
            </div>
        </div>
    );
};