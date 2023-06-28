import Styles from "./myHeader.module.scss";
import Image from "next/image";
import Logo from "public/img/logo.png";

function MyHeader() {
    return (
        <header className={Styles.header}>
            <Image src={ Logo } />
        </header> 
    );
}

export default MyHeader;