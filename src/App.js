import React from 'react';
import './App.css';
import { Stage, Layer, Circle, Line} from 'react-konva'

export default class App extends React.Component {
    
    state = {
      x: this.getRandomInt(window.innerWidth-20),
      y: this.getRandomInt(window.innerHeight-20),
      fill: "white",
      radius: 20,
      abled: "able",
      stroke: "white",
      // onClick: this.consoleLogNoControl
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    // consoleLogNoControl = () => {
    //   console.log('not it')
    // }

    controlMic = () => {
      console.log("you've got the mic")
      // this will turn mic on and off for one user
      // document.querySelector('.U26fgb.JRY2Pb').click()

    }
    
    handleClick = (event) => {
      const xPos = this.getRandomInt(window.innerWidth-this.state.radius)
      const yPos = this.getRandomInt(window.innerHeight-this.state.radius)
      
      this.setState({
       x: xPos,
       y: yPos,
       fill: "orange",
       abled: "disabled",
       stroke: "black",
       onClick: this.controlMic
      })
    }

    render() {

      return (
        <div className="App">
      <h1>Jumpball</h1>
      <button
      className={this.state.abled}
      onClick={this.handleClick}>
      Start Game
      </button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
      <Circle
            x={this.state.x}
            y={this.state.y}
            radius={this.state.radius}
            fill={this.state.fill}
            onClick={this.state.onClick}
      />
      <Line
            x={this.state.x}
            y={this.state.y-20}
            points={[0, 0, 0, 40]}
            stroke={this.state.stroke}
            onClick={this.state.onClick}
          />
      <Line
            x={this.state.x}
            y={this.state.y-20}
            points={[-18, 10, -8, 20, -18, 30]}
            tension={0.5}
            stroke={this.state.stroke}
            onClick={this.state.onClick}
          />
      <Line
            x={this.state.x+35}
            y={this.state.y-20}
            points={[-18, 10, -28, 20, -18, 30]}
            tension={0.5}
            stroke={this.state.stroke}
            onClick={this.state.onClick}
          />
      </Layer>
      </Stage>
      </div>
      );
    }
  }
