import React from 'react';
import Card from './WorkCard';
import './CardList.css';
import {Link} from 'react-router-dom'

function CardList(){
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div>
            <Card
              src='./images/beach finder screenshot.png'
              text='Beach Finder Application'
              path='/work'
            />
            <Link to='https://anthonyloredo5.github.io/Beachin-It/index.html'>Deployed Application</Link>
            </div>
            <div>
            <Card
              src='./images/budget tracker screenshot 2.png'
              text='A budget tracker PWA'
              path='/work'
            />
            <Link to='https://intense-spire-60570.herokuapp.com/'>Deployed application</Link>
            </div>
            <div>
            <Card
              src='./images/password generator.png'
              text='A password generator'
              path='/work'
            />
            <Link to='https://github.com/emmabauta/Password-Generator'>GitHub repo</Link>
            </div>
            <div>
            <Card
              src='./images/note taker screenshot.png'
              text='A note taker application'
              path='/work'
            />
             <Link to='https://note-taker1114.herokuapp.com/'>Deplopyed application</Link>
            </div>
            <div>
            <Card
              src='./images/coding quiz screenshot.png'
              text='A Coding Quiz'
              path='/work'
            />
            <Link to='https://github.com/emmabauta/Code-Quiz'>GitHub repo</Link>
            </div>

          </ul>
        </div>
      </div>
    </div>
    )
}
export default CardList;