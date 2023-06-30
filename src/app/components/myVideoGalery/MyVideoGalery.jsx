'use client';

import Styles from "./myVideoGalery.module.scss";
import videosData from "config/videos.json"
import MyVideoCard from "../myVideoCard/MyVideoCard"
import MyVideoPlayer from "../myVideoPlayer/MyVideoPlayer"
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

function MyVideoGalery() {
    // Max videos for page
    const MAX_ITENS = 9;
    const QTD_PAGES = Math.ceil(videosData.videos.length / MAX_ITENS);
    const [videos, setVideos] = useState(getVideosPerPage());
    const [pages, setPages] = useState(getPages());
    
    // To play a video
    const [ playVideo, setPlayVideo ] = useState(false);
    const [ videoPlayed, setVideoPlayed ] = useState(0);
    
    // To move the carousel
    const [slide, setSlide] = useState(null);

    // Get an number of pages according videos
    function getPages() {
        const auxPages = [];

        for (let i = 1; i <= QTD_PAGES; i ++) {
            auxPages.push({ page: i, selected: false });
        }

        return auxPages;
    }

    // To separate the videos in groups for each page
    function getVideosPerPage() {
        const auxVideos = [];

        for (let i = 0; i < QTD_PAGES; i++) {
            auxVideos.push(videosData.videos.slice((i * MAX_ITENS), ((i * MAX_ITENS) + MAX_ITENS)));
        }

        return auxVideos;
    }

    // Get the colums of the pages grid
    // According the JSON file
    function getColPages() {
        const qtd = QTD_PAGES + 1;
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

        // Move the carousel
        if (slide != null) {
            slide.go(pageClicked);
        }        
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
            <Splide 
                options={ {
                    gap: '1rem',
                    arrows: false, 
                    pagination: false,
                    controls: false
                } } 
                onMounted={setSlide}
                className={Styles.slide} >
                { videos.map((videoData, index) => (
                    <SplideSlide key={ index }>
                        <section className={Styles.videos}>
                            { videoData.map((video, index) => (
                                <MyVideoCard 
                                    key={ index }
                                    id={ video.id }
                                    title={ video.title }
                                    thumbnail={ video.thumbnail }
                                    videoClicked={ () => openVideo(index) }
                                />
                            )) }
                        </section>
                    </SplideSlide>
                )) }
            </Splide>
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