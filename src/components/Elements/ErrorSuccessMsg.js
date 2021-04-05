import React from 'react'

const ErrorSuccessMsg = (props) => {
    return (
        <>
            {
                props.send ?
                    <div className="msg">
                        <div className="msg__backdrop msg__backdrop--send"></div>
                        <h3 className="msg__text">Danke, dass Sie uns kontaktiert haben</h3>
                    </div> : null
            }
            {
                props.error ?
                    <div className="msg">
                        <div className="msg__backdrop msg__backdrop--error"></div>
                        <h3 className="msg__text">Etwas ist schief gelaufen, bitte überprüfen Sie Ihre Internetverbindung</h3>
                    </div> : null
            }
        </>


    )
}

export default ErrorSuccessMsg
