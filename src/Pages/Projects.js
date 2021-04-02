import React from 'react';
import Hero from '../components/Hero';
import Grid from '../components/ProjectPage/GridGallery';

const Projects = (props) => {
    console.log(props)
    return (
        <div>
            <Hero backgroundImage={props.data.background} title={props.data.title} />
            <Grid images={props.data.galleryImages} />
        </div >
    )
}

export default Projects
