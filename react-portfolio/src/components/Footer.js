import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
            <Link to='https://github.com/emmabauta'>GitHub</Link>
            <Link to='https://www.linkedin.com/in/emma-dill-16b66b135/'>LinkedIn</Link>
            </div>
        </div>
    
    )
}

export default Footer;
