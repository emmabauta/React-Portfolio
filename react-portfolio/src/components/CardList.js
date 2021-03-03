import React from 'react';
import Card from './WorkCard';
import './CardList.css';

function CardList(){
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              src='./images/beach finder screenshot.png'
              text='Beach Finder Application'
              path='/work'
            />
            <Card
              src='./images/greenthumb.png'
              text='A gardening application'
              path='/work'
            />
            <Card
              src='./images/budget tracker screenshot 2.png'
              text='A budget tracker PWA'
              path='/work'
            />
            <Card
              src='./images/password generator.png'
              text='A password generator'
              path='/work'
            />
            <Card
              src='./images/note taker screenshot.png'
              text='A note taker application'
              path='/work'
            />
            <Card
              src='./images/coding quiz screenshot.png'
              text='A Coding Quiz'
              path='/work'
            />
          </ul>
        </div>
      </div>
    </div>
    )
}
export default CardList;