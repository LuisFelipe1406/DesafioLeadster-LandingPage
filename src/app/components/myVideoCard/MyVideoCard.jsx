'use client'

import Styles from "./myVideoCard.module.scss";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from 'react-icons/fa';

/* PROPS
    title: String
    thumbnail: String
 */
function MyVideoCard({ title, thumbnail }) {
    const [selected, setSelected] = useState(false);

    function imageLoader(src) {
        return src;
    }

    // To change the state when hover
    function selectCard() {
        setSelected(!selected);
    }

    // To verify if the video is selected
    function getSelected() {
        if (selected) {
            return Styles.selected;
        }        
    }

    return (
        <div className={Styles.divVideo} onMouseEnter={selectCard} onMouseLeave={selectCard}>
            { selected && <div className={Styles.play}>
                <FaPlay size={50} className={Styles.icPlay} />
            </div> }
            <Image 
                className={Styles.thumbnail}
                loader={() => imageLoader(thumbnail)}
                src="thumb.png" 
                width={362}
                height={204}
                alt="thumbnail" />
            <div className={`${Styles.title} ${getSelected()}`}>
                <span>{ title }</span>
            </div>
        </div>
    );
}

export default MyVideoCard;