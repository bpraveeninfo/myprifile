import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_small.png';
import bannerimage from '../img/developers-01.jpg';
import Social from '../components/Social';
import ResizeImage from 'react-resize-image';
import Homecanvas from './Homecanvas';



class Home extends Component {
    
    render() {
        return (
            <div className="condiv">
                <div className="container-fluid home-page">
                {/* <Homecanvas/> */}
                <div className="">
                    <div className="card-group col-md-6">
                        <div className="card">
                            <img src={bannerimage} class="card-img-top" alt="..."/> 
                        
                            <div className="card-body author-area">
                            <ResizeImage                      
                                src={profilepic} 
                                alt="Praveen Kumar Bandi"                               
                                options={{ w: 200}}
                            />                      
                            <h3 className="card-title">About Me</h3>
                            <ReactTypingEffect className="typingeffect" text={['I am Praveen Kumar Bandi','I am a UI and Web Developer']} speed={100} eraseDelay={700}></ReactTypingEffect>
                            <h5>UI and Web <u>Developer</u> | UI/UX <u>Designer</u></h5>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                        <div className="card-group col-md-6">
                            <label>Color Code</label>:<label>#83C332</label>


                        </div>
                </div>
                </div>
            </div>        
            )
        }
    }
    
    export default Home