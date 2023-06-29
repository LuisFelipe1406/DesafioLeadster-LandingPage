'use client'

import Styles from "./myVideoCard.module.scss";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from 'react-icons/fa';

/* PROPS
    id: number
    title: String
    thumbnail: String
    videoClicked: handler
 */
function MyVideoCard({ id, title, thumbnail, videoClicked }) {
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

    // Emit a callback to open the video clicked
    function openVideo() {
        videoClicked(id);
    }

    return (
        <div className={Styles.divVideo} onMouseEnter={selectCard} onMouseLeave={selectCard}>
            { selected && <div className={Styles.play}>
                <FaPlay size={50} className={Styles.icPlay} onClick={ openVideo }/>
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