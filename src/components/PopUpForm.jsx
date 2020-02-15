import React, { useEffect } from 'react';

// import styles
import './popUpForm.scss';

function PopUpForm(props) {

    useEffect(() => {
        document.addEventListener('keydown', props.handleKeydown)

        return () => {document.removeEventListener('keydown', props.handleKeydown)} 
    })

    function onFocus(event) {
        let input = event.target
        input.parentElement.classList.add('is-focus')      
    }

    function onBlur(event) {
        let input = event.target
        
        if(!input.value){
            input.parentElement.classList.remove('is-focus')   
        }           
    }

    return (
        <div className="popup-form">            
            <div className="content">
                <button className="close-button" onClick={() => props.handleForm()}>X</button>
                <div className="title">Publicar</div>
                <form action="" autoComplete="off">
                    <input type="file" name="photos" id="photos" />

                    <div className="form-row form-row-col">
                        <div className="form-col name-col">
                            <label htmlFor="name" className="form-label">Nombre de tu mascota</label>                        
                            <input 
                            type="text" 
                            name="name" 
                            id="name"
                            onFocus={(event) => onFocus(event)}
                            onBlur={(event) => onBlur(event)}
                            />    
                        </div>

                        <div className="form-col date-col">                                
                            <label htmlFor="date" className="form-label">¿Cuándo?</label>                     
                            <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            />    
                        </div>                        
                    </div>

                    <div className="form-row">
                        <label htmlFor="address" className="form-label">¿Donde?</label>                        
                        <input 
                        type="text" 
                        name="address" 
                        id="address"
                        onFocus={(event) => onFocus(event)}
                        onBlur={(event) => onBlur(event)}
                        />                           
                    </div>

                    <div className="form-row form-row-col">
                        <div className="form-col email-col">
                            <label htmlFor="email" className="form-label">Tu Email</label>                     
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onFocus={(event) => onFocus(event)}
                            onBlur={(event) => onBlur(event)} 
                            />   
                        </div>

                        <div className="form-col phone-col">                              
                            <label htmlFor="phone" className="form-label">Tu Teléfono</label>                     
                            <input 
                            type="number"
                            name="phone" 
                            id="phone" 
                            onFocus={(event) => onFocus(event)}
                            onBlur={(event) => onBlur(event)} 
                            />    
                        </div>                        
                    </div>

                    <div className="form-row">
                        <label htmlFor="desc" className="form-label">Una descripción de tu mascota</label>                     
                        <textarea 
                        name="desc" 
                        id="desc" 
                        rows="5" 
                        onFocus={(event) => onFocus(event)}
                        onBlur={(event) => onBlur(event)}
                        >
                        </textarea>                        
                    </div>

                    <input type="submit" value="Publicar" className="btn" />                                    
                </form>
            </div>            
        </div>
    )
}

export default PopUpForm
