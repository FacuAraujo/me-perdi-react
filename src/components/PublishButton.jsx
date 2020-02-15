import React, { useState } from 'react'

// Import components
import PopUpForm from './PopUpForm'
// Import styles
import './publishButton.scss'

export default function PublishButton(){
    const [formVisible, setFormVisible] = useState(false)

    function handleFormVisible(){
        setFormVisible(false)
    }

    function handleKeydown (event) {
        if(event.key === 'Escape'){
            setFormVisible(false)
        }
    }

    if(formVisible){
        return(
            <div className="publish-button">
                <button className="btn"  onClick={() => setFormVisible(true)}>Publicar</button>
                <div className="popup">
                    <PopUpForm 
                    handleForm={handleFormVisible} 
                    handleKeydown={handleKeydown}>
                    </PopUpForm>
                </div>
            </div>
        )   
    }else {
        return(
            <div className="publish-button">
                <button className="btn"  onClick={() => setFormVisible(true)}>Publicar</button>  
            </div>
        )
    }

    
}