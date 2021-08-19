import style from '../styles/Home.module.css'
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Advantage() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={style.advantageText}>Преимущества аутстаффинга</h1>
                <div className={style.advantage}>
                    <div>
                        <span className={styles.advantageImg}> <Image src="/full_control.jpeg" width={45} height={45}/></span>
                        <h3 className={style.advantageTextBlock}>Полный контроль над проектом</h3>
                        <h6 className={style.advantageTextSecond}>Вы можете рассчитывать, что команда, привлеченная по
                            модели аутстаффинг, целиком и полностью
                            сосредоточится над вашим проектом. Модель аутстаффинга позволяет избежать недопонимания и
                            задержек, которые могут произойти при привлечении третьих лиц. Вы всегда cможете напрямую
                            связаться с командой, чтобы обсудить функции, изменения и улучшения.</h6>
                    </div>
                    <div>
                        <span className={styles.advantageImg}> <Image src="/best_quality.jpeg" width={45} height={45}/></span>
                        <h3 className={style.advantageTextBlock}>Лучшее качество</h3>
                        <h6 className={style.advantageTextSecond}>Мы не говорим, что качество проектов, выполненных на
                            аутсорсе хуже - оно действительно может быть неплохим. Но будучи полностью посвященными
                            одному
                            проекту, разработчики cмогут тратить больше времени на доведение его до совершенства.</h6>
                    </div>
                    <div>
                        <span className={styles.advantageImg}> <Image src="/best_price.jpeg" width={45} height={45}/></span>
                        <h3 className={style.advantageTextBlock}>Лучшие цены</h3>
                        <h6 className={style.advantageTextSecond}>Создание команды в другой стране - непростая задача,
                            если
                            нет финансовых стимулов. К счастью, аутстаффинг имеет тенденцию сокращать расходы, а также
                            справляется с задачей сохранения качества. Сложив эти два фактора, вы получите
                            беспроигрышный
                            вариант.</h6>
                    </div>
                    <div>
                        <span className={styles.advantageImg}> <Image src="/flexibility.jpeg" width={45} height={45}/></span>
                        <h3 className={style.advantageTextBlock}>Гибкость команды</h3>
                        <h6 className={style.advantageTextSecond}>Мы хотим, чтобы проекты росли и процветали.
                            Масштабировать
                            бизнес или сбавить обороты- в любом случае, аутстаффинг дает вам большую гибкость при
                            изменении
                            размера вашей команды по мере необходимости. Вы можете добавлять новых разработчиков или
                            сокращать команду, проще и быстрее, чем с другими моделями.</h6>
                    </div>
                    <div>
                        <span className={styles.advantageImg}> <Image src="/involvement.jpeg" width={45} height={45}/></span>
                        <h3 className={style.advantageTextBlock}>Вовлеченность в процесс найма </h3>
                        <h6 className={style.advantageTextSecond}>Аутстаффинг сохраняет преимущества классического
                            рекрутинга, но при этом избавляет вас от временных и финансовых затрат, связанных с поиском
                            кандидатов и первичным собеседованием. Аутстаффинг позволяет заказчику и его внутреннему
                            рекрутеру быть полностью вовлеченными в процесс найма, что позволит выбрать наиболее
                            подходящих
                            кандидатов.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};