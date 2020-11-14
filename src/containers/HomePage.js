import React, { Component } from 'react';
import plant from '../images/plant1.png';
import plant2 from '../images/plant2.png';
import chicago from '../images/chicago.png';
import skyline from '../images/skyline.png';
import tristan from '../images/tristan-headshot.jpg';
import gallery from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';
import telephone from '../images/twitter 1.svg';
import email from '../images/youtube-symbol 1.svg';
import instagram from '../images/instagram 1.svg';
import contact from '../images/youtube-symbol 1.svg';
import jordan from '../images/jordan.png';
import camera from '../images/camera-icon.png';
import cloud from '../images/cloud.png';
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
                With an admiration for the abstract and the collision of urban
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
                  As a current law enforcement officer, Tristan has grown to love
                  this city and is eager to capture it through phoptography for the world to see.
                  Once only a hobbyst, he is ready to turn his passion into something more serious.
                
                </p>
              </div>
              <div className="about-work">
                <h3>Work</h3>
                <p>
                 Tristan has served 
                </p>
              </div>
              <div className="about-contact">
                <h3>Get in touch</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas, maxime reprehenderit. Assumenda necessitatibus id
                  consectetur asperiores harum dolore nihil fuga?
                </p>
              </div>
            </div>
          </section>
          <div className="gallery" id="gallery">
            <header className="gallery-head">
              <h2>Quality Photography</h2>
              <p>My work pictures that I took</p>
            </header>
            <img className="gallery1" src={gallery} alt="man in suit" />
            <img className="gallery2" src={gallery2} alt="lady in coat" />
            <img className="gallery3" src={gallery3} alt="lady in t-shirt" />
            <img className="gallery4" src={gallery4} alt="lady in jacket" />
          </div>
          <section className="contact" id="contact">
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
            <img src={contact} alt="tristan-villalobos" />
          </section>
        </main>
        <footer>
          <h4>tristan villalobos &copy; 2019</h4>
          <ul>
            <li>
              <a href="#">
                <img src={telephone} alt="youtube-social-media" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={email} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} />
              </a>
            </li>
          </ul>
        </footer>
      </React.Fragment>
    );
  }
}
