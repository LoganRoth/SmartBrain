import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
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
      userIn: '',
      imageUrl: '',
      boxes: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: '',
      }
    }
  }

  loadUser = (user) => {
    this.setState({ user: user })
  }

  clearUser = () => {
    this.setState({
      imageUrl: '',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      }
    })
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
    if (this.state.userIn) {
      fetch('https://immense-caverns-44226.herokuapp.com/imageurl', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ input: this.state.userIn })
      })
        .then(response => response.json())
        .then(response => {
          if (response) {
            fetch('https://immense-caverns-44226.herokuapp.com/image', {
              method: 'put',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(resp => {
                if (resp.status === 200) {
                  return resp.json()
                } else {
                  throw Error
                }
              })
              .then(updateEntry => {
                this.setState(
                  Object.assign(this.state.user,
                    {
                      entries: updateEntry.entries
                    }
                  )
                )
                if (response.outputs?.length) {
                  this.displayFaceBox(this.calculateFaceLoc(response.outputs[0].data.regions))
                }
              })
              .catch(console.log)
          }
        })
        .catch(console.log)
    }
  }

  onRouteChange = (newRoute) => {
    const setIsSignedIn = newRoute === 'home'
    if ((newRoute === 'signin') || (newRoute === 'register')) {
      this.clearUser()
    }
    this.setState({
      route: newRoute,
      isSignedIn: setIsSignedIn
    })
  }

  render() {
    const { isSignedIn, imageUrl, route, boxes } = this.state
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particleOpts}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {
          route === 'signin'
            ? <div>
              <Logo />
              <SignIn
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
            </div>
            : route === 'register'
              ? <div>
                <Logo />
                <Register
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser}
                />
              </div>
              : <div>

                <Logo />
                <Rank
                  name={this.state.user.name}
                  entries={this.state.user.entries}
                />
                <ImageLinkForm
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition
                  imageUrl={imageUrl}
                  boxes={boxes}
                />
              </div>
        }
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
