import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscClose } from 'react-icons/vsc'

const ModalGallery = (props) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {props.modal &&
                <motion.div className='modal'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5 }}
                >
                    <div className={"modal__backdrop"} onClick={props.showHideModal}></div>
                    <div className="modal__imagebox">
                        <img src={props.currentImage} alt={props.currentImage} className="modal__image" />
                        <VscClose className="modal__close-icon" onClick={props.showHideModal} />
                    </div>
                </motion.div >
            }
        </AnimatePresence>
    )
}

export default ModalGallery
