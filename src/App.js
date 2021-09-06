import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <FaceRecognition />
      <footer>
        <p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://icons8.com/icon/4hGUZoWc6Eyu/brain">
            Brain
          </a> icon by <a
            rel="noreferrer"
            target="_blank"
            href="https://icons8.com">
            Icons8
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
