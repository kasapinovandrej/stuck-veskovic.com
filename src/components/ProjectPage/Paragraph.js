import React from 'react';

const Paragraph = (props) => {
    return (
        <div className='wrap'>
            <p className="paragraph-style">{props.text}</p>
            <h2>{props.caption}</h2>
        </div>
    )
}

export default Paragraph;
