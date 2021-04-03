import React from 'react'
import Image from '../../assets/img/AboutUs/construction-concept-with-engineering-tools.jpg';
import Button from '../Elements/KontaktiereButton';

const ManagerSeit = () => {
    return (
        <div className="wrap" >
            <div className="about__message" style={{ backgroundImage: `url(${Image})` }}>
                <h5 className="about__message--h5">Arbeit mit uns</h5>
                <h3 className="about__message--h3">AUFTRAGNEHMER &amp; BAU <br /> MANAGER SEIT 2000</h3>
                <Button btnClass='about__message--button' textClass='about__message--title' path='/kontakt' />
            </div>
        </div>
    )
}

export default ManagerSeit
