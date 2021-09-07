import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
import Particles from 'react-particles-js';


const particleOpts = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      userIn: ''
    }
  }

  onInputChange = (event) => {

  }

  onButtonSubmit = (event) => {

  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particleOpts}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
        <footer>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://icons8.com/icon/4hGUZoWc6Eyu/brain">
              {'Brain'}
            </a> {'icon by'} <a
              rel="noreferrer"
              target="_blank"
              href="https://icons8.com">
              {'Icons8'}
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
