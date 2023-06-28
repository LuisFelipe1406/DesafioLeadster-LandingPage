import Styles from "./myTopBanner.module.scss";

function MyTopBanner() {
    return (
       <section className={Styles.content}>
            <div className={Styles.mainInfo}>

            </div>
            <span>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</span>
       </section> 
    );
}

export default MyTopBanner;