import style from "../styles/Home.module.css";
import "../styles/work.module.css"
import '../styles/Home.module.css'
import Image from "next/image";


export default function Work() {
    return (
        <div>
            <h6 className={style.advantageText}>Как мы работаем ?</h6>
            <div className={style.workBlockElem}>
                <div className={style.workBlock}>
                    <Image src="/list.png" width={100} height={100}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Требования</h3>
                        <h6 className={style.workH6}>Вместе обсудим задачу и процесс работы над ней.</h6>
                    </span>
                </div>
                <div className={style.workBlock}>
                    <Image src="/list.png" width={100} height={100}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Требования</h3>
                        <h6 className={style.workH6}>Вместе обсудим задачу и процесс работы над ней.</h6>
                    </span>
                </div>
                <div className={style.workBlock}>
                    <Image src="/list.png" width={100} height={100}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Требования</h3>
                        <h6 className={style.workH6}>Вместе обсудим задачу и процесс работы над ней.</h6>
                    </span>
                </div>
                <div className={style.workBlock}>
                    <Image src="/list.png" width={100} height={100}/>
                    <span className={style.workTexts}>
                        <h3 className={style.workH3}>Требования</h3>
                        <h6 className={style.workH6}>Вместе обсудим задачу и процесс работы над ней.</h6>
                    </span>
                </div>
            </div>
        </div>
    );
};