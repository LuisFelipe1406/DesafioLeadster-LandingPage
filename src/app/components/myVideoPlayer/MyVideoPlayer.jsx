import Styles from "./myVideoPlayers.module.scss";
import Image from "next/image";
import Spreadsheet from "public/img/Spreadsheet.png";
import Document from "public/img/Document.png";
import Presentation from "public/img/Presentation.png";
import { IoMdClose } from 'react-icons/io';
import YouTube from "react-youtube";

/* PROPS
    video: Video
    closeVideo: handler
 */
function MyVideoPlayer({ video, closeVideo }) {
    const opts = {
        height: '360',
        width: '640',
    };

    // To close the video player
    function exit() {
        closeVideo();
    }

    return (
        <section className={Styles.content}>
            <section className={Styles.player}>
                <IoMdClose size={30} className={Styles.icClose} onClick={exit}/>
                <h3 className={Styles.title}><strong>Webinar:</strong> { video.title }</h3>
                <div className={Styles.video}>
                    <YouTube videoId={video.id_youtube} opts={opts} />
                </div>
                <section className={Styles.details}>
                   <span>Descrição</span>
                   <div className={Styles.line}></div>
                   <p>{ video.description }</p>
                   <span>Downloads</span>
                   <div className={Styles.line}></div>
                   <div className={Styles.downloadButtons}>
                        <Image src={ Spreadsheet } alt="Spreadsheet" className={Styles.downloadButton} />
                        <Image src={ Document } alt="Document" className={Styles.downloadButton} />
                        <Image src={ Presentation } alt="Presentation" className={Styles.downloadButton} />
                   </div>
                </section>
            </section>
        </section>        
    );
}

export default MyVideoPlayer;