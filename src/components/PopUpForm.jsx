import React from 'react'

function PopUpForm() {
    return (
        <div className="popup-form">
            <div className="content">
                <div className="close-button">X</div>
                <div className="title">Publicar</div>
                <form action="">
                    <input type="file" name="photos" id="photos" />

                    <div className="form-row">
                        <div className="form-col">
                            <label htmlFor="name" className="form-label">Nombre</label>                        
                            <input type="text" name="name" id="name"/>    
                        </div>

                        <div className="form-col">
                            <label htmlFor="address" className="form-label">Dirección</label>                        
                            <input type="text" name="address" id="address" />    
                        </div>                        
                    </div>

                    <div className="form-row">
                        <label htmlFor="date" className="form-label">Fecha</label>                     
                        <input type="date" name="date" id="date" />                        
                    </div>

                    <div className="form-row">
                        <label htmlFor="email" className="form-label">Email</label>                     
                        <input type="email" name="email" id="email" />                        
                    </div>

                    <div className="form-row">
                        <label htmlFor="phone" className="form-label">Teléfono</label>                     
                        <input type="number" name="phone" id="phone" />                        
                    </div>

                    <div className="form-row">
                        <label htmlFor="desc" className="form-label">Descripción</label>                     
                        <textarea name="desc" id="desc" rows="5"></textarea>                        
                    </div>                                      
                </form>
            </div>
        </div>
    )
}

export default PopUpForm
