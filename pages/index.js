import styles from '../styles/Home.module.css'
import Header from "./header";
import Information from "./information";
import Advantage from "./advantage";
import Work from "./Work";
import Questions from "./Questions";
import Application from "./Application";
import Resources from "./Resources";

export default function Home() {
    return (
        <div>
            <div className={styles.container}>
                 <span className={styles.number}>
                     <h6 className={styles.numberText}>+996 312 44-55-66</h6>
                 </span>
            </div>
            <Header/>
            <Information/>
            <Advantage/>
            <Resources/>
            <Work/>
            <Questions/>
            <Application/>
            <footer className={styles.footer}>sdfvsdfv</footer>
        </div>
    );
};
