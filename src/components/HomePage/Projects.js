import React from 'react';
import MultiPictures from '../Elements/MultiPictures';
import SinglePicture from '../Elements/SinglePicture';
import Project1 from '../../assets/img/Projects/Project-1.jpg';
import Project2 from '../../assets/img/Projects/Project-2.png';
import Project3 from '../../assets/img/Projects/Project-3.jpg';
import Project5 from '../../assets/img/Projects/Project-5.jpg';
import Project6 from '../../assets/img/Projects/Project-6.jpg';
import Project7 from '../../assets/img/Projects/Project-7.jpg';

const Projects = () => {
    return (
        <section className="pro">
            <div className="wrap">
                <h2>VOR ALLEM PROJEKTE</h2>
                <div className="pro__box">
                    <div className="pro__upperbox">
                        <SinglePicture
                            title='FASSADEN HAUSES'
                            img={Project1}
                            link='/projekte/fassaden-hauses'
                        />
                        <MultiPictures
                            titleOne='AKUSTIKDECKEN'
                            titleTwo='ZUSAMMENKLAPPBARES PERGOLA SYSTEM'
                            imgOne={Project2} imgTwo={Project3}
                            linkOne='/projekte/akustikdecken'
                            linkTwo='/projekte/zusammenklappbares-glassystem'
                        />
                    </div>
                    <div className="pro__upperbox">
                        <MultiPictures
                            titleOne='MODERNES BADEZIMMER'
                            titleTwo='KERAMIKBODEN'
                            imgOne={Project5} imgTwo={Project6}
                            linkOne='/projekte/modernes-badezimmer'
                            linkTwo='/projekte/keramikboden'
                        />
                        <SinglePicture
                            title='INNENRAUM DES HAUSES'
                            img={Project7}
                            link='/projekte/innenraum-des-hauses'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
