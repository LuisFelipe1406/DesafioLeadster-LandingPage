import Styles from "./myFooter.module.scss";
import Image from "next/image";
import Logo from "public/img/logo.png";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram, } from 'react-icons/bi';

function MyFooter() {
    return(
        <footer className={Styles.footer}>
            <section className={Styles.footerLogo}>
                <Image src={ Logo } alt="Logo" />
                <span>Tranformando visitantes em clientes</span>
            </section>
            <section className={Styles.footerInfo}>
                <section className={Styles.colFooterInfo}>
                    <h3>Links Principais</h3>
                    <div className={Styles.colFooterItens}>
                        <h4>Home</h4>
                        <h4>Ferramenta</h4>
                        <h4>Preços</h4>
                        <h4>Contato</h4>
                    </div>
                </section>
                <section className={Styles.colFooterInfo}>
                    <h3>Cases</h3>
                    <div className={Styles.colFooterItens}>
                        <h4>Geração de Leads B2B</h4>
                        <h4>Geração de Leads em Software</h4>
                        <h4>Geração de Leads em Imobiliária</h4>
                        <h4>Case de Sucesso</h4>
                    </div>
                </section>
                <section className={Styles.colFooterInfo}>
                    <h3>Materiais</h3>
                    <div className={Styles.colFooterItens}>
                        <h4>Blog</h4>
                        <h4>Parceria com Agências</h4>
                        <h4>Guia Definitivo do Marketing</h4>
                        <h4>Materiais Gratuitos</h4>
                    </div>
                </section>
                <section className={Styles.colFooterInfo}>
                    <h3>Desenvolvimento</h3>
                    <div className={Styles.social}>
                        <a href="https://www.linkedin.com/in/luis-felipe-da-silva-79167b16a/" target="_blank"><BiLogoLinkedin size={30} className={Styles.icSocial} /></a>
                        <a href="https://www.instagram.com/luis_felipes14/" target="_blank"><BiLogoInstagram size={30} className={Styles.icSocial} /></a>
                        <a href="https://github.com/LuisFelipe1406" target="_blank"><BiLogoGithub size={30} className={Styles.icSocial} /></a>                        
                    </div>
                    <div className={Styles.contato}>
                        <span><strong>Email:</strong> luis_felipes14@hotmail.com</span>
                        <span><strong>Telefone:</strong> (48) 99610-1597</span>
                    </div>
                </section>
            </section>
            <section className={Styles.footerBottomInfo}>
                <span>Esse projeto é meramente uma ferramenta de estudo do Desafio Leadster | Feito por Luis Felipe da Silva</span>
                <span>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP - 80010-000 | Termos de uso</span>
            </section>
        </footer>
    );
}

export default MyFooter;