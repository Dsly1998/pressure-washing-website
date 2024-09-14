import React from 'react';
import curb from "../../images/curb.jpg";
import fence from "../../images/fence.jpg";
import deck from "../../images/deck.jpg";
import driveway from "../../images/Driveway.jpg";
import pool from "../../images/pool.jpg";
import house from "../../images/house.jpg";
import "./Services.css";

function Services() {
  return (
    <div className="services" id='services'>
      <div className="services-content">
        <div className="services-banner">
          <h2 className="services__title">Services</h2>
          <div className='services__list-container'>
          <ul className="services__list">
          <li className="services__list-items">House Wash</li>
<li className="services__list-items">Driveways</li>
<li className="services__list-items">Pool Enclosures</li>
<li className="services__list-items">Vinyl Fences</li>
<li className="services__list-items">Decks</li>
<li className="services__list-items">Patios</li>
<li className="services__list-items">Sidewalks</li>
<li className="services__list-items">Landscape Curbing</li>
<li className="services__list-items">House Wash</li>
<li className="services__list-items">Driveways</li>
<li className="services__list-items">Pool Enclosures</li>
<li className="services__list-items">Vinyl Fences</li>
<li className="services__list-items">Decks</li>
<li className="services__list-items">Patios</li>
<li className="services__list-items">Sidewalks</li>
<li className="services__list-items">Landscape Curbing</li>
</ul>
   </div>
        </div>
        <div className="services__container">
            <div className="services__card-container">
          <div className="services__card">
            <img src={house} className="services__image" alt="House Wash" />
            <div className="services__text">
              <h3 className="services__card-title">House Wash</h3>
              <p className="services__card-description">
              Our house wash service leaves your home looking brand new by removing grime, dirt, and mildew from the exterior.
              </p>
            </div>
          </div>
          <div className="services__card">
            <img src={driveway} className="services__image" alt="Driveway" />
            <div className="services__text">
              <h3 className="services__card-title">Driveway</h3>
              <p className="services__card-description">
                Keep your driveway looking pristine with our high-pressure cleaning service that removes dirt, grime, and oil stains.
              </p>
            </div>
          </div>
          <div className="services__card">
            <img src={pool} className="services__image" alt="Pool Enclosures" />
            <div className="services__text">
              <h3 className="services__card-title">Pool Enclosures</h3>
              <p className="services__card-description">
                We clean your pool enclosure to ensure a crystal-clear view without damaging the screens or structure.
              </p>
            </div>
          </div>
          <div className="services__card">
            <img src={fence} className="services__image" alt="Vinyl Fences" />
            <div className="services__text">
              <h3 className="services__card-title">Vinyl Fences</h3>
              <p className="services__card-description">
                Restore your vinyl fence to its original beauty with our specialized cleaning that removes dirt, mold, and algae.
              </p>
            </div>
          </div>
          <div className="services__card">
            <img src={deck} className="services__image" alt="Decks" />
            <div className="services__text">
              <h3 className="services__card-title">Decks</h3>
              <p className="services__card-description">
                Maintain the longevity and appearance of your deck with our safe and effective cleaning methods.
              </p>
            </div>
          </div>
          <div className="services__card">
            <img src={curb} className="services__image" alt="Landscape Curbing" />
            <div className="services__text">
              <h3 className="services__card-title">Landscape Curbing</h3>
              <p className="services__card-description">
                Enhance the look of your landscape with professionally cleaned curbing that makes your lawn stand out.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
