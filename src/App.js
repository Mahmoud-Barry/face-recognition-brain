import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-tsparticles';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from "./components/Logo/Logo";
import Navigation from './components/navigation/Navigation';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
 apiKey: 'c8b3bcdebc3b43928e57bba9fe28b2f5'
});

const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
}

const particlesInit = (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log(container);
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value);

  }

  onButtonSubmit = ()=>{
    this.setState({
      imageUrl:this.state.input
    })
    app.models.predict(
      "c8b3bcdebc3b43928e57bba9fe28b2f5",
      "https://samples.clarifai.com/face-det.jpg")
      .then(
        function(response){
          console.log(response);
        },
        function(err){

        }
      );
  }

  render(){
    return (
      <div className="App">
          <Particles className='particles'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={ this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageUrl={this.imageUrl} />
      </div>
    );
  }
}

export default App;
