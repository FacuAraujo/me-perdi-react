import React from 'react';

// Import styles
import './header.scss';

function Header(){
    return(
        <header className="main-header">
            <div className="container">
                <div className="logo">Me Perdí</div>
                {/* <PublishButton></PublishButton> */}
            </div>
        </header>
    );
}

export default Header;