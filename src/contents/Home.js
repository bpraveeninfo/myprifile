import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_small.png';
import bannerimage from '../img/comakeit.jpg';
import Social from '../components/Social';
import ResizeImage from 'react-resize-image';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            {/* <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Praveen Kumar Bandi','I am a UI and web developer']} speed={100} eraseDelay={700}></ReactTypingEffect>
            <Social/> */}



            <div className="card-group">
                <div className="card">
                    <img src={bannerimage} class="card-img-top" alt="..."/>
                    <div className="card-body author-area">
                    <ResizeImage
                   
                        src={profilepic} 
                        alt="Praveen Kumar Bandi"
                        
                        options={{ w: 200}}
                    />

                    {/* <img src={profilepic} class="card-img-top" alt="..." options={{ width:20 }}/> */}
                    <h3 className="card-title">Praveen Kumar Bandi</h3>
                    <h5>UI and Web <u>Developer</u> | UI/UX <u>Designer</u></h5>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>




</div>


</div>

            
         
            )
        }
    }
    
    export default Home