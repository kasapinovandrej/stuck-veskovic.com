import React from 'react'
import Info from '../../assets/img/ContactUs/contact-information.png';
import Man from '../../assets/img/ContactUs/contact-us.png';
import Location from '../../assets/img/ContactUs/location-contact-us.png';
import KontaktiereButton from '../Elements/KontaktiereButton';

const ContactInfo = (props) => {
    return (
        <div className="wrap">
            <div className='contact__title-box'>
                <h3 className='contact__title' >Sei frei und kontaktiere uns!</h3>
                <KontaktiereButton
                    btnClass='contact__absolute--box'
                    textClass='contact__absolute--title'
                    scrollFunction={props.scrollFunction} />
                <img src={Man} alt="Man" className='contact__absolute-image' />
            </div>
            <div className='contact__info-box'>
                <div className='contact__info-card'>
                    <img src={Location} alt="info" className="contact__image" />
                    <a href="https://goo.gl/maps/GTzAa9W9rwz9vtoA9" target="_blank" rel="noreferrer" className='contact__link'>Eichmühle 1, 36251 BAD HERSFELD, DEUTSCHLAND</a>
                </div>
                <div className='contact__info-card'>
                    <img src={Info} alt="Location" className="contact__image" />
                    <a href="tel:017641552816" className="contact__link">0176 415 528 16</a>
                    <a href="mailto:stuckveskovic@yahoo.de" className="contact__link">stucveskovic@yahoo.de</a>
                </div>
            </div>

        </div>
    )
}

export default ContactInfo
