import React from 'react'
import Image from '../../assets/img/AboutUs/construction-concept-with-engineering-tools.jpg';
import { useHistory } from 'react-router-dom';
import Button from '../Elements/KontaktiereButton';

const ManagerSeit = () => {
    const history = useHistory();

    const moveToPage = () => {
        history.push('/kontakt')
    }

    return (
        <div className="wrap" >
            <div className="about__message" style={{ backgroundImage: `url(${Image})` }}>
                <div className="about__message--content">
                    <h5 className="about__message--h5">Arbeit mit uns</h5>
                    <h3 className="about__message--h3">AUFTRAGNEHMER &amp; BAU <br /> MANAGER SEIT 2000</h3>
                    <Button btnClass='about__message--button' textClass='about__message--title' btnFunction={moveToPage} />
                </div>
            </div>
        </div>
    )
}

export default ManagerSeit
