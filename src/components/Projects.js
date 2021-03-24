import React from 'react';
import MultiPictures from './Elements/MultiPictures';
import SinglePicture from './Elements/SinglePicture';
import Project1 from '../assets/img/Projects/Project-1.jpg';
import Project2 from '../assets/img/Projects/Project-2.jpg';
import Project3 from '../assets/img/Projects/Project-3.jpg';
import Project5 from '../assets/img/Projects/Project-5.jpg';
import Project6 from '../assets/img/Projects/Project-6.jpg';
import Project7 from '../assets/img/Projects/Project-7.jpg';




const Projects = () => {
    return (
        <section className="pro">
            <div className="wrap">
                <h2>VOR ALLEM PROJEKTE</h2>
                <div className="pro__box">
                    <div className="pro__upperbox">
                        <SinglePicture
                            title='LAKE HOUSE, FRANKFURT AM MAIN / 2018'
                            img={Project1}
                        />
                        <MultiPictures
                            titleOne='LAKE HOUSE, FRANKFURT AM MAIN / 2018'
                            titleTwo='LAKE HOUSE, FRANKFURT AM MAIN / 2018'
                            imgOne={Project2} imgTwo={Project3}
                        />
                    </div>
                    <div className="pro__upperbox">
                        <MultiPictures
                            titleOne='LAKE HOUSE, FRANKFURT AM MAIN / 2018'
                            titleTwo='LAKE HOUSE, FRANKFURT AM MAIN / 2018'
                            imgOne={Project5} imgTwo={Project6}
                        />
                        <SinglePicture
                            title='LAKE HOUSE, FRANKFURT AM MAIN / 2018'
                            img={Project7}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
