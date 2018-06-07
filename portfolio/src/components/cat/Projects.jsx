import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import SteemPx from "../../assets/steempx.png";
import HackUp from '../../assets/hackup.png';
import Pong from '../../assets/pong.png';



const Projects = () => {

  return (
    <div id='projects' className='projects-container'>
      <div className='project-text'>
        <h1>PROJECTS</h1>
        <hr />
        <div className='row'>
          <div className='col-1'>
          </div>
          <div className='col-10 project-pic-field'>

            <div className='pic-p-con'>
              <img className='p-p-con' src={SteemPx} />

              <div className='p-t-con'>
                <strong>Description:</strong><br />SteemPX is an app where photographers can share there images and get paid in <a target='_blank' href='https://www.steem.com/'>Steem</a>.<br />
                <strong>Tech:</strong><br />-React -Node.js -Steem -Bootstrap -PostgreSQL<br />
                <strong><a target='_blank' href='https://github.com/chancelorb/steempx'>GitHub repo</a></strong><br />
                <strong><a target='_blank' href='https://steempx.herokuapp.com/'>Visit site</a></strong>
              </div>
            </div>
            <div className='pic-p-con'>
              <img className='p-p-con' src={HackUp} />

              <div className='p-t-con'>
                <strong>Description:</strong><br />HackUp is a site where you can create meetups to work or socialize with other developers.<br />
                <strong>Tech:</strong><br />-React -Node.js -PostgreSQL -Mapbox API <br />
                <strong><a target='_blank' href='https://github.com/chancelorb/event-project'>GitHub repo</a></strong><br />
                <strong><a target='_blank' href='https://tranquil-mesa-50145.herokuapp.com/'>Visit site</a></strong>
              </div>
            </div>
            <div className='pic-p-con'>
              <img className='p-p-con' src={Pong} />

              <div className='p-t-con'>
                <strong>Description:</strong><br />Multiplayer pong game.<br />
                <strong>Tech:</strong><br />-Vanilla JS -jQuery<br />
                <strong><a target='_blank' href='https://github.com/chancelorb/pong-game-project'>GitHub repo</a></strong><br />
                <strong><a target='_blank' href='https://chancelorb.github.io/pong-game-project/'>Visit site</a></strong>
              </div>
            </div>
            <div className='col-1'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
