import styles from '../styles/Home.module.css'
import Image from "next/image";
import Header from "./header";
import Information from "./information";
import Advantage from "./advantage";
import Work from "./Work";
import Questions from "./Questions";
import Application from "./Application";
import Resources from "./Resources";
import {useRef} from "react";

export default function Home() {
    const commentSection = useRef();
    const commentResources = useRef();
    const commentWork = useRef();
    const commentApplication = useRef();

    return (
        <div>
            <div className={styles.container}>
                 <span className={styles.number}>
                     <h6 className={styles.numberText}>+996 312 44-55-66</h6>
                 </span>
            </div>
            <Header
                commentSection={commentSection}
                commentResources={commentResources}
                commentWork={commentWork}
                commentApplication={commentApplication}
            />
            <Information/>
            <Advantage commentSection={commentSection} />
            <Resources commentResources={commentResources} />
            <Work commentWork={commentWork} />
            <Questions/>
            <Application commentApplication={commentApplication} />
            <div className={styles.container}>
                <footer className={styles.footer}>
                    <h4 className={styles.footerText}>© 2021 WEBDINO. All rights reserved info@webdino.pro</h4>
                    <Image src="/Avengers-Endgame-logo.jpeg" width={200} height={100}/>
                </footer>
            </div>
        </div>
    );
};
