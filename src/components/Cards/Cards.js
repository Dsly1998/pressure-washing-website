// Cards.js

import './Cards.css';
import gallery11 from '../../images/gallery11.png';
import gallery12 from '../../images/gallery12.png';
import gallery22 from '../../images/gallery22.png';
import gallery21 from '../../images/gallery21.png';
import gallery31 from '../../images/gallery31.png';
import gallery32 from '../../images/gallery32.png';
import gallery33 from '../../images/gallery33.png';

export const cards = [
    {
        image: gallery32,
        alt: 'Image 0',
        caption: 'Red Line & Blue Pressure Washing'
    },
    {
        image: gallery11,
        alt: 'Image 1',
        caption: 'Before'
    },
    {
        image: gallery12,
        alt: 'Image 2',
        caption: 'After'
    },
    {
        image: gallery22,
        alt: 'Image 3',
        caption: 'Before'
    },
    {
        image: gallery21,
        alt: 'Image 4',
        caption: 'After'
    },
    {
        image: gallery33,
        alt: 'Image 5',
        caption: 'Before'
    },
    {
        image: gallery31,
        alt: 'Image 6',
        caption: 'After'
    }
];

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'> 
                {cards.map((card, index) => (
                    <div className='cards__item' key={index}>
                        <img src={card.image} alt={card.alt} className='cards__image'/>
                        <h3 className='cards__caption'>{card.caption}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;
