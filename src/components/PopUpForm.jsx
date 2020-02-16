import React, { useEffect } from 'react';
import {Calendar} from 'primereact/calendar'

// import styles
import './popUpForm.scss';

export default function PopUpForm(props) {

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
                <div className="close-button" onClick={() => props.handleForm()}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>

                <div className="title">Publicar</div>
                <form action="" autoComplete="off">
                    <input type="file" name="photos" id="photos" />

                    <div className="form-row">
                        <label htmlFor="name" className="form-label">Nombre de tu mascota</label>                        
                        <input 
                        type="text" 
                        name="name" 
                        id="name"
                        onFocus={(event) => onFocus(event)}
                        onBlur={(event) => onBlur(event)}
                        />    
                    </div>

                    <div className="form-row">                                
                        <label htmlFor="date" className="form-label">¿Cuándo?</label>                     
                        <Calendar></Calendar>    
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

                    <div className="form-row">                    
                        <label htmlFor="email" className="form-label">Tu Email</label>                     
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onFocus={(event) => onFocus(event)}
                        onBlur={(event) => onBlur(event)} 
                        />                                                                       
                    </div>

                    <div className="form-row">                              
                        <label htmlFor="phone" className="form-label">Tu Teléfono</label>                     
                        <input 
                        type="number"
                        name="phone" 
                        id="phone" 
                        onFocus={(event) => onFocus(event)}
                        onBlur={(event) => onBlur(event)} 
                        />    
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