import react from 'react';
import './ContactBtn.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize 
    }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSIze = SIZES.includes(buttonSizes) ? buttonSize : SIZES[0];

    return (
        <Link to = '/contact' className = 'btn-mobile'>
            <button className {`btn ${checkBUttonStyle} ${checkButtonSize}`} onClick ={onClick}>
                {children}
            </button>
        </Link>
    )
}