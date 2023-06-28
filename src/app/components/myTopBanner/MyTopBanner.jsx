import Styles from "./myTopBanner.module.scss";
import Image from "next/image";
import assetBanner from "public/img/assetBanner.png";

function MyTopBanner() {
    return (
       <section className={Styles.content}>
            <div className={Styles.bannerButton}>
                <span><strong>WEBINARS EXCLUSIVOS</strong></span>
            </div>
            <section className={Styles.mainInfo}>
                <h1 className={Styles.subtitle}>Menos Conversinha,</h1>
                <section className={Styles.titleSection}>
                    <h1 className={Styles.title}>Mais Conversão</h1> 
                    <Image className={Styles.icBanner} src={ assetBanner } />
                </section>
            </section>
            <section className={Styles.bottomInfo}>
                <span>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</span>
            </section>
       </section> 
    );
}

export default MyTopBanner;