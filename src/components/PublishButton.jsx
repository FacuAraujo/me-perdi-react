import React from 'react'

// Import components
import PopUpForm from './PopUpForm'
// Import styles
import './publishButton.scss'


function PublishButton(){
    return(
        <div className="publish-button">
            <button className="btn">Publicar</button>
            <PopUpForm></PopUpForm>   
        </div>
    )
}

export default PublishButton