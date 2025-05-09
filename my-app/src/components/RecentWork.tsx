import bookstore from '../assets/images/bookstore.png';
import restaraunt from '../assets/images/restaraunt.png';
import twitter from '../assets/images/twitter-pg.png';
import weather from '../assets/images/weather-app.png';
import patashule from '../assets/images/patashule.png';
import petDetails from '../assets/images/pet-details.png';
import game from '../assets/images/game.png';

export default function RecentWork () {
  return (
    <div className="container" id="projects">
      <div className="text-dark row">
        <h3>My Recent Work</h3>
        <hr />
      </div>
      <br />
      <div className="row">
        <div className="col-sm bookstore">
          <img src={bookstore} className="img-fluid" alt="bookstore" />
        </div>
        <div className="col-sm text-dark p-3">
          <h5>Bookstore</h5>
          <p>
            A bookstore dashboard that allows user to add/remove books from the store and to check books on the store,
            reading progress
          </p>
          <ul className="list-group list-group-horizontal card-text">
            <li className="list-group-item">
              <a href="#" className="btn">React</a>
            </li>
            <li className="list-group-item">
              <a href="#" className="btn">Redux</a>
            </li>
            <li className="list-group-item">
              <a href="https://github.com/jebitok-dev/bookstore" target="_blank" rel="noopener noreferrer"
                className="btn">GitHub</a>
            </li>
          </ul>
          <br />
          <a href="https://bookstore-rrdx.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="bg-dark text-white btn border">See Project <i className="fa fa1 fa-external-link-square"> </i></a>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="bg-transparent col-12 col-md-4 my-3">
          <div className="card">
            <img className="card-img img-fluid" src={restaraunt} alt="restaraunt" />
            <div className="card-img-overlay wheat d-flex flex-column justify-content-center">
              <h6 className="card-subtitle mb-2">Restaraunt</h6>
              <p className="card-text">Landing page that allows user to see about, menu and contact
                information. </p>
              <div className="link d-flex">
                <a href="#" className="card-link wheat">JavaScript</a>
                <a href="#" className="card-link wheat">HTML</a>
                <a href="https://github.com/jebitok-dev/RestaurantPage" target="_blank" rel="noopener noreferrer"
                  className="card-link wheat">GitHub</a>
              </div>
            </div>
          </div>
          <a href="https://github.com/jebitok-dev/RestaurantPage" target="_blank" rel="noopener noreferrer"
            className="btn text-dark see-project bg-light border">See Source <i className="fab fa-github"> </i></a>
          <a href="https://deal-restaurantjs.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="bg-dark text-white btn see-project border">See Project <i className="fa fa1 fa-external-link-square">
            </i></a>
        </div>
        <br />
        <div className="bg-transparent col-12 col-md-4 my-3">
          <div className="card">
            <img className="card-img img-fluid" src={twitter} alt="twitter" />
            <div className="card-img-overlay bg-transparent wheat d-flex flex-column justify-content-center">
              <h6 className="card-subtitle mb-2">Twitter-Redesign</h6>
              <p className="card-text">App allows to sign-up or log-in, tweet, follow other users.</p>
              <div className="link d-flex text-white">
                <a href="#" className="card-link wheat">Ruby on Rails</a>
                <a href="#" className="card-link wheat">SCSS</a>
                <a href="https://github.com/jebitok-dev/Twitter-Redesign" target="_blank" rel="noopener noreferrer"
                  className="wheat card-link">GitHub</a>
              </div>
            </div>
          </div>
          <a href="https://github.com/jebitok-dev/Twitter-Redesign" target="_blank" rel="noopener noreferrer"
            className="see-project text-dark btn bg-light border">See Source <i className="fab fa-github"> </i></a>
          {/**  <a href="https://fierce-spire-26749.herokuapp.com/login" target="_blank" rel="noopener noreferrer"
            className="bg-dark text-white btn see-project border">See Project <i className="fa fa-external-link-square">
            </i></a> */}
          <a href="https://github.com/jebitok-dev/Twitter-Redesign" target="_blank" rel="noopener noreferrer"
            className="bg-dark text-white btn see-project border">See Project <i className="fa fa1 fa-external-link-square">
            </i></a>
        </div>
        <br />
        <div className="bg-transparent col-12 col-md-4 my-3">
          <div className="card">
            <img className="card-img img-fluid" src={weather} alt="weather" />
            <div className="card-img-overlay wheat bg-transparent d-flex flex-column justify-content-center">
              <h6 className="card-subtitle mb-2">Weather App</h6>
              <p className="card-text">Allows users to search for the real-time weather of city</p>
              <div className="link d-flex">
                <a href="#" className="card-link wheat">JavaScript</a>
                <a href="#" className="card-link wheat">Open-Weather-API</a>
                <a href="https://github.com/jebitok-dev/Weather-App" target="_blank" rel="noopener noreferrer"
                  className="card-link  wheat">GitHub</a>
              </div>
            </div>
          </div>
          <a href="https://github.com/jebitok-dev/Weather-App" target="_blank" rel="noopener noreferrer"
            className="btn text-dark see-project bg-light border">See Source <i className="fab fa-github"> </i></a>
          <a href="https://weather-app-async.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="bg-dark text-white btn see-project border">See Project <i className="fa fa1 fa-external-link-square">
            </i></a>
        </div>
        <br />
      </div>
      <div className="row">
        <div className="bg-transparent col-12 col-md-4 my-3">
          <div className="card">
            <img className="card-img img-fluid" src={patashule} alt="patashule" />
            <div className="card-img-overlay wheat bg-transparent d-flex flex-column justify-content-center">
              <h6 className="card-subtitle mb-2">PataShule</h6>
              <p className="card-text">Landing page that allows user to see about, menu and contact
                info. </p>
              <div className="link d-flex">
                <a href="#" className="card-link wheat">Bootstrap</a>
                <a href="https://github.com/jebitok-dev/Capstone1-html" target="_blank" rel="noopener noreferrer"
                  className="card-link wheat">GitHub</a>
              </div>
            </div>
          </div>
          <a href="https://github.com/jebitok-dev/Capstone1-html" target="_blank" rel="noopener noreferrer"
            className="text-dark flex-end btn see-project bg-light border">See Source <i className="fab fa-github"> </i></a>
          <a href="https://patashule-capstone.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="bg-dark text-white btn see-project border">See Project <i className="fa fa1 fa-external-link-square">
            </i></a>
        </div>
        <br />
        <div className="bg-transparent col-12 col-md-4 my-3">
          <div className="card">
            <img className="card-img img-fluid" src={petDetails} alt="pet details" />
            <div className="card-img-overlay wheat bg-transparent d-flex flex-column justify-content-center">
              <h6 className="card-subtitle mb-2">Adopt Pets</h6>
              <p className="card-text">App allows user to filter different pets.</p>
              <div className="link d-flex">
                <a href="#" className="card-link wheat">React</a>
                <a href="#" className="card-link wheat">SCSS</a>
                <a href="https://github.com/jebitok-dev/catalogue-of-pets/" target="_blank" rel="noopener noreferrer"
                  className="card-link wheat">GitHub</a>
              </div>
            </div>
          </div>
          <a href="https://github.com/jebitok-dev/catalogue-of-pets/" target="_blank" rel="noopener noreferrer"
            className="btn see-project text-dark bg-light border">See Source <i className="fab fa-github"> </i></a>
          <a href="https://catalogue-of-pets.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="bg-dark text-white btn see-project border">See Project <i className="fa fa1 fa-external-link-square">
            </i></a>
        </div>
        <br />
        <div className="bg-transparent col-12 col-md-4 my-3">
          <div className="card">
            <img className="card-img img-fluid" src={game} alt="game" />
            <div className="card-img-overlay wheat bg-transparent d-flex flex-column justify-content-center">
              <h6 className="card-subtitle mb-2">Phaser Game</h6>
              <p className="card-text">A JavaScript & HTML5 game</p>
              <div className="link d-flex">
                <a href="#" className="card-link wheat">HTML5</a>
                <a href="#" className="card-link wheat">PhaserJS</a>
                <a href="https://github.com/jebitok-dev/platform-game" target="_blank" rel="noopener noreferrer"
                  className="card-link wheat">GitHub</a>
              </div>
            </div>
          </div>
          <div className="gap-2">
            <a href="https://github.com/jebitok-dev/platform-game" target="_blank" rel="noopener noreferrer"
              className="text-dark btn see-project bg-light border">See Source <i className="fab fa-github"> </i></a>
            <a href="https://platform-game-with-phaser.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="bg-dark text-white btn see-project border">See Project <i className="fa fa1 fa-external-link-square">
              </i></a>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

