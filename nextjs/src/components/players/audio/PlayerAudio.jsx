import React, { Component } from "react";
import {openFullscreen, closeFullscreen} from "../../../services/utils"

class PlayerAudio extends Component {
  constructor(props){
    super(props)
    this.state = {
      audioElement: null,
      isPlaying: false,
    };
  }
 

  componentDidMount = () => {
    this.state.audioElement = new Audio("media/music/"+this.props.audio)
    if (this.state.isPlaying) {
      this.state.audioElement.play();
    }
  };

  handleClickStopMusic = () => {
    closeFullscreen();
    this.state.audioElement.pause();
    const copyState = { ...this.state };
    copyState.isPlaying = false;
    this.setState(copyState);
  };

  handleClickPayMusic = () => {
    openFullscreen();
    this.state.audioElement.play();
    const copyState = { ...this.state };
    copyState.isPlaying = true;
    this.setState(copyState);
  };



  render() {
    return (
      <div className="player-audio container my-3 text-center">
        {this.state.isPlaying ? (
          <button
            className="btn btn-lg btn-danger"
            onClick={this.handleClickStopMusic}
          >
            Arrêter le Mode immersion
          </button>
        ) : (
          <button
            className="btn btn-lg btn-success"
            onClick={this.handleClickPayMusic}
          >
            Mode immersion
          </button>
        )}
      </div>
    );
  }
}

export default PlayerAudio;
