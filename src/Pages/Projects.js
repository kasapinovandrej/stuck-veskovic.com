import React, { useState } from 'react';
import Hero from '../components/Hero';
import Grid from '../components/ProjectPage/GridGallery';
import Paragraph from '../components/ProjectPage/Paragraph';
import Cards from '../components/ProjectPage/Cards'
import ModalGallery from '../components/ProjectPage/ModalGallery';

const Projects = (props) => {
    const [modal, setModal] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)
    const showHideModal = (e) => {
        setModal(!modal)
        setCurrentImage(e.target.src)
    }
    return (
        <div>
            <Hero backgroundImage={props.data.background} title={props.data.title} />
            <Grid images={props.data.galleryImages} modal={modal} showHideModal={showHideModal} />
            <Paragraph text={props.data.text} caption={props.data.caption} />
            <Cards data={props.data.cards} />
            <ModalGallery modal={modal} showHideModal={showHideModal} currentImage={currentImage} />
        </div >
    )
}

export default Projects
