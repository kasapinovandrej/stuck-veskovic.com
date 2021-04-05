import React from 'react';
import { motion } from 'framer-motion';

const KontaktiereButton = (props) => {
    return (
        <motion.button
            className={`btn ${props.btnClass}`}
            whileHover={{ scale: 1.03, transition: { duration: .2 } }}
            whileTap={{ scale: 0.98, transition: { duration: .2 } }}
            onClick={props.btnFunction}
        >
            <h3 className={props.textClass}>kontaktiere uns</h3>
        </motion.button>
    )
}

export default KontaktiereButton
