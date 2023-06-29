'use client';

import Styles from "./myVideoGalery.module.scss";
import videosData from "config/videos.json"
import MyVideoCard from "../myVideoCard/MyVideoCard"
import MyVideoPlayer from "../myVideoPlayer/MyVideoPlayer"
import { useEffect, useState } from "react";

function MyVideoGalery() {
    // Max videos for page
    const MAX_ITENS = 9;    
    const [videos, setVideos] = useState(videosData.videos);
    const [pages, setPages] = useState(getPages());
    
    // To play a video
    const [ playVideo, setPlayVideo ] = useState(false);
    const [ videoPlayed, setVideoPlayed ] = useState(0);

    // Get an number of pages according videos
    function getPages() {
        const qtdPages = Math.ceil(videos.length / MAX_ITENS);
        const auxPages = [];

        for (let i = 1; i <= qtdPages; i ++) {
            auxPages.push({ page: i, selected: false });
        }

        return auxPages;
    }

    // Get the colums of the pages grid
    // According the JSON file
    function getColPages() {
        const qtd = Math.ceil(videosData.videos.length / MAX_ITENS) + 1;
        const style = { "grid-template-columns": "repeat("+ qtd +", min-content);"};

        return style;
    }

    // To verify if the page is selected
    function getSelected(index) {
        if (pages[index].selected) {
            return Styles.selected;
        }        
    }

    // To change page
    function changePage(pageClicked) {
        // Att the page object
        const auxPages = [...pages];

        auxPages.forEach((page, index) => {
            page.selected = false;

            if (index == pageClicked) {
                page.selected = true;
            }
        });
        
        setPages(auxPages);

        // Att the videos object
        const auxVideos = videosData.videos.slice((pageClicked * MAX_ITENS), (pageClicked * MAX_ITENS) + MAX_ITENS);

        setVideos(auxVideos);
    }

    // To open a video
    function openVideo(video) {
        setVideoPlayed(video);
        setPlayVideo(true);
    }

    // To close the video
    function closeVideo() {
        setVideoPlayed(0);
        setPlayVideo(false);
    }

    useEffect(() => {
        //First page starts selected
        changePage(0);    
    }, []);

    return (
        <section className={Styles.galery}>
            { playVideo && <MyVideoPlayer 
                video={ videosData.videos[videoPlayed] }
                closeVideo={ closeVideo }
            /> }
            <section className={Styles.videos}>
                { videos.map((video, index) => (
                    <MyVideoCard 
                    key={ index }
                    id={ video.id }
                    title={ video.title }
                    thumbnail={ video.thumbnail }
                    videoClicked={ openVideo }
                    />
                )) }
            </section>
            <section className={Styles.pages} style={getColPages()}>
                <h3>Página</h3>
                { pages.map((page, index) => (
                    <h3 key={ index } className={`${Styles.page} ${getSelected(index)}`} onClick={() => changePage(index)} >{ page.page }</h3>
                )) }
            </section>
        </section>
    );
}

export default MyVideoGalery;