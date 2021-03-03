import React from 'react';
import { Link } from 'react-router-dom';
import './CardList.css';
function Card(props) {
    return (
        <>
            <div className="work__box">
                <div className="work__text">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <ul className="work__list">
                    </ul>
                    <Link className='work__links' to={props.path}></Link>
                    <div className="work__image-box">
                        <img
                            className='work__img'
                            alt='Project'
                            src={props.src}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;