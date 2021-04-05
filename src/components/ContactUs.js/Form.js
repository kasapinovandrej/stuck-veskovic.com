import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from '../../assets/img/ContactUs/top-view-person-writing-laptop-with-copy-space.png';
import ErrorSuccessMsg from '../Elements/ErrorSuccessMsg';

const Form = (props, ref) => {
    const [msgSent, setMsgSent] = useState(false)
    const [msgSentError, setMsgSentError] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pslsa7e', 'template_7ila39t', e.target, 'user_Jbnf8X3GB50eRzOKuwj0H')
            .then((result) => {
                setMsgSent(true)
                setTimeout(() => {
                    setMsgSent(false)
                }, 4000)
            }, (error) => {
                setMsgSentError(true)
                setTimeout(() => {
                    setMsgSentError(false)
                }, 4000)
            });
        e.target.reset()
    }
    return (
        <div className="wrap" ref={ref}>
            <div className="form">
                <div className="form__image-box">
                    <img src={Image} alt="laptop" className="form__image" />
                </div>
                <form className="form__box" onSubmit={sendEmail}>
                    <h3 className="form__title">SCHREIBEN SIE UNS</h3>
                    <div className="form__input-box">
                        <label className="form__label" htmlFor="name">Name:</label>
                        <input className="form__input" type="text" name="name" required />
                        <label className="form__label">Email:</label>
                        <input className="form__input" type="email" name="email" required />
                        <label className="form__label">Deine Nachricht:</label>
                        <textarea name="message" className="form__message" required />
                        <input className="form__button" type="submit" value="SENDEN" />
                    </div>
                    <ErrorSuccessMsg send={msgSent} error={msgSentError} />
                </form>
            </div>
        </div>
    )
}

export default React.forwardRef(Form)
