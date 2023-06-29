'use client'

import Styles from "./myBottomBanner.module.scss";
import Image from "next/image";
import MyButton from "../myButton/MyButton"

function MyBottomBanner() {
    function imageLoader(src) {
        return src;
    }

    return (
        <section className={Styles.content}>
            <Image
                loader={() => imageLoader("https://i.imgur.com/LS4WNnz.png")}
                src="chart.png" 
                width={739}
                height={687}
                alt="chart" />
            <section className={Styles.info}>
                <section className={Styles.mainInfo}>
                    <h1>Pronto para triplicar sua <strong>Geração de Leads?</strong></h1>
                    <h3>Criação e efetivação em <strong>4 minutos.</strong></h3>
                </section>
                <section className={Styles.secondaryInfo}>
                    <section className={Styles.rowSecInfo}>
                        <MyButton 
                            title="VER DEMONSTRAÇÃO"
                            selected
                        />
                        <Image
                            loader={() => imageLoader("https://i.imgur.com/n3mH3lK.png")}
                            src="chart.png" 
                            width={140}
                            height={50}
                            alt="chart" />
                    </section>
                    <section className={Styles.rowSecInfo}>
                        <div className={Styles.rowSecInfo}>
                            <Image
                                loader={() => imageLoader("https://i.imgur.com/Yc2drGE.png")}
                                src="chart.png" 
                                width={16}
                                height={16}
                                alt="chart" />
                            <div className={Styles.rowSecInfo}>
                                <span>Não é necessário cartão de crédito</span>
                                <span>|</span>
                            </div>
                        </div>
                        <div className={Styles.rowSecInfo}>
                            <Image
                                loader={() => imageLoader("https://i.imgur.com/GczJMij.png")}
                                src="chart.png" 
                                width={92}
                                height={16}
                                alt="chart" />
                            <span>4,9/5 média de satisfação</span>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default MyBottomBanner;