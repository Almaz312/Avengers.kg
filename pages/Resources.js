import style from "../styles/Home.module.css";

export default function Resources() {
    return (
        <div>
            <h1 className={style.advantageText}>Ресурсы и технологии</h1>
            <div className={style.resourcesBlock}>
                <div className={style.resourcesBlockElem}>
                    <h3 className={style.advantageTextBlock}>Frontend</h3>
                    <h6  className={style.resourcesText}>
                        React js (Next, Redux)
                        Vue js
                        Angular
                        HTML5, CSS3
                    </h6>
                </div>
                <div className={style.resourcesBlockElem}>
                    <h3 className={style.advantageTextBlock}>Backend</h3>
                    <h6  className={style.resourcesText}>
                        PHP (Laravel, Yii2)
                        Python
                        Java
                        Node.js (Express, Fastify, Nest)
                    </h6>
                </div>
                <div className={style.resourcesBlockElem}>
                    <h3 className={style.advantageTextBlock}>Database</h3>
                    <h6  className={style.resourcesText}>
                        PostgreSQL
                        MongoDB
                        Redis
                        Clickhouse
                        Elasticsearch
                    </h6>
                </div>
                <div className={style.resourcesBlockElem}>
                    <h3 className={style.advantageTextBlock}>Other</h3>
                    <h6  className={style.resourcesText}>
                        UI/UX Designer
                        Business analsyt
                        Product manager
                        QA
                    </h6>
                </div>
            </div>
        </div>
    );
};