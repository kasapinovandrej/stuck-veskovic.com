import React from 'react';
import Hero from '../components/Hero';
import Grid from '../components/ProjectPage/GridGallery';
import Paragraph from '../components/ProjectPage/Paragraph';
import Cards from '../components/ProjectPage/Cards'

const Projects = (props) => {
    return (
        <div>
            <Hero backgroundImage={props.data.background} title={props.data.title} />
            <Grid images={props.data.galleryImages} />
            <Paragraph text={props.data.text} caption={props.data.caption} />
            <Cards data={props.data.cards} />
        </div >
    )
}

export default Projects
