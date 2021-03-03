import React from 'react';
import Card from './WorkCard';

function CardList(){
    return (
    <div className='cardList'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='work_list'>
              <Card
                src = 'react-portfolio\public\Images\beach finder screenshot.png'
                text='Beach Finder App'
                path='/work'
              />
              <Card
                src = 'react-portfolio\public\Images\beach finder screenshot.png'
                text='Beach Finder App'
                path='/work'
              /> 
              <Card
                src = 'react-portfolio\public\Images\beach finder screenshot.png'
                text='Beach Finder App'
                path='/work'
              /> 
              <Card
                src = 'react-portfolio\public\Images\beach finder screenshot.png'
                text='Beach Finder App'
                path='/work'
              />
              <Card
                src = 'react-portfolio\public\Images\beach finder screenshot.png'
                text='Beach Finder App'
                path='/work'
              />
              <Card
                src = 'react-portfolio\public\Images\beach finder screenshot.png'
                text='Beach Finder App'
                path='/work'
              />
            </ul>
        </div>
      </div>
    </div>  
    )
}