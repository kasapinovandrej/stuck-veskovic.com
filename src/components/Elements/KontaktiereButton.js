import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const KontaktiereButton = (props) => {

    return (
        <Link to={props.path}>
            <motion.button
                className={`btn ${props.btnClass}`}
                whileHover={{ scale: 1.03, transition: { duration: .2 } }}
                whileTap={{ scale: 0.98, transition: { duration: .2 } }}
                onClick={props.scrollFunction}
            >
                <h3 className={props.textClass}>kontaktiere uns</h3>
            </motion.button>
        </Link>
    )
}

export default KontaktiereButton
