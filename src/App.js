import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'


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

const clarifaiApp = new Clarifai.App({
  apiKey: '7d03e1d91aec4d5e8b7428ebd47eaaa1'
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      userIn: '',
      imageUrl: '',
      boxes: []
    }
  }

  calculateFaceLoc = (regions) => {
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return regions.map(region => {
      return {
        leftCol: region.region_info.bounding_box.left_col * width,
        topRow: region.region_info.bounding_box.top_row * height,
        rightCol: width - (region.region_info.bounding_box.right_col * width),
        bottomRow: height - (region.region_info.bounding_box.bottom_row * height)
      }
    })
  }

  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes })
  }

  onInputChange = (event) => {
    this.setState({
      userIn: event.target.value
    })

  }

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.userIn
    })
    clarifaiApp.models.predict(
      'f76196b43bbd45c99b4f3cd8e8b40a8a',
      this.state.userIn
    ).then(response => {
      this.displayFaceBox(this.calculateFaceLoc(response.outputs[0].data.regions))
    }
    ).catch(err => console.log(err))
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
        <FaceRecognition
          imageUrl={this.state.imageUrl}
          boxes={this.state.boxes}
        />
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
