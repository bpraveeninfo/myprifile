import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Praveen Kumar Bandi','I am a UI and web developer']} speed={100} eraseDelay={700}/>
            <Social></Social>
            </div>
            )
        }
    }
    
    export default Home