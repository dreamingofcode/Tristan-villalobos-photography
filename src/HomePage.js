import React, { Component } from 'react';
import plant from './images/plant1.png';
import plant2 from './images/plant2.png';
import chicago from './images/chicago.png';
import skyline from './images/skyline.png';
import tristan from './images/tristan-headshot.jpg';
import gallery from './images/gallery-1.jpg';
import gallery2 from './images/gallery-2.jpg';
import gallery3 from './images/gallery-3.jpg';
import gallery4 from './images/gallery-4.jpg';
import jordan from './images/jordan.png';
import camera from './images/camera-icon.png';
import cloud from './images/cloud.png';
export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="main-head"></header>
        <main>
          <section className="hero">
            <div className="hero-introduction flex">
              <img src={camera} alt="camera icon" />
              <h2>
                Tristan Villalobos <br />
                Photography
              </h2>
              <p>
                With an admiration for the abstract and for the collision of urban
                and rural forms, Tristan is on a mission to capture the chaos
                within the urban jungles of Chicago.
              </p>
              <a href="#gallery">Gallery</a>
            </div>
            <div className="hero-images">
              <img
                className="hero-tristan"
                src={skyline}
                alt="picture of tristan villalobos"
              />

              <img src={plant} alt="" className="plant1 plant" />
              <img src={plant2} alt="" className="plant2 plant" />
            </div>
          </section>
          <section className="about" id="about">
            <div className="about-image">
              <h5>CHICAGO CONCRETE JUNGLE</h5>
              <img src={chicago} alt="chicago" />
              <div className="cloud">
                <img src={cloud} alt="cloud" />
              </div>
            </div>
            <div className="about-text flex" id="work">
              <h2>Tristan Villalobos</h2>
              <img src={tristan} alt="headshot" />
              <div className="about-life">
                <h3>Bio</h3>
                <p>
                  As a current Chicagoan and essential worker, Tristan has grown
                  to love this city and is eager to capture it through
                  phoptography for the world to see. Once only a hobbyst, he is
                  ready to turn his passion into something more.
                </p>
              </div>
              <div className="about-work">
                <h3>Work</h3>
                <p>
                  Tristan has served his community as an essential worker for
                  many years. He has worked under government employment for the
                  city of Chicago and has had the privilege to experience the
                  great generosity of the people first hand. He is now seeking
                  to give back by providing his photography expertise as a self
                  taught photographer.
                </p>
              </div>
              <div className="about-contact">
                <h3>Get in touch</h3>
                <p>
                  Tristan Photography is currently building up it's clientele
                  and has stopped production due to COVID-19. If you would like to
                  connect with us, please fill out our form below or contact us via email.
                </p>
              </div>
            </div>
          </section>
          <div className="gallery" id="gallery">
            <header className="gallery-head">
              <h2>Quality Photography</h2>
              <p>More coming soon!</p>
            </header>
            <img className="gallery1" src={gallery} alt="man in suit" />
            <img className="gallery2" src={gallery2} alt="lady in coat" />
            <img className="gallery3" src={gallery3} alt="lady in t-shirt" />
            <img className="gallery4" src={gallery4} alt="lady in jacket" />
          </div>
          <section className="contact" id="contact">
            <img src={jordan} alt="tristan-villalobos" />
            <div className="form-wrapper flex">
              <h2>
                Get in <br />
                <span> touch.</span>
              </h2>
              <form>
                <label for="email">Your Email:</label>
                <input type="email" id="email" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        </main>
        
      </React.Fragment>
    );
  }
}
