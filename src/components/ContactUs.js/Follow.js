import React from 'react'
import { AiOutlinePhone, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const Follow = () => {
    return (
        <div className="wrap">
            <h2>folge uns</h2>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/veskovicpergola" className="big-icons__link"><AiOutlineInstagram className="big-icons" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100014241640083" className="big-icons__link"><AiFillFacebook className="big-icons" /></a>
                <a href="tel:017641552816" className="big-icons__link"><AiOutlinePhone className="big-icons" /></a>
            </div>
        </div>

    )
}

export default Follow
