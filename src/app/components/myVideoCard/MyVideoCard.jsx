'use client'

import Styles from "./myVideoCard.module.scss";
import Image from "next/image";

/* PROPS
    title: String
    thumbnail: String
 */
function MyVideoCard({ title, thumbnail }) {
    function imageLoader(src) {
        return src;
    }

    return (
        <div className={Styles.divVideo}>
            <Image 
                className={Styles.thumbnail}
                loader={() => imageLoader(thumbnail)}
                src="thumb.png" 
                width={362}
                height={204}
                alt="thumbnail" />
            <div className={Styles.title}>
                <span>{ title }</span>
            </div>
        </div>
    );
}

export default MyVideoCard;