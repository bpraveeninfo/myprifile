import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

class About extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            'abouttext':  'UI and Web Developer'
        };
    }



    
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h1>I'm Praveen Kumar Bandi</h1>
            <ReactTypingEffect className="typingeffect" text={this.state.abouttext} speed={100} eraseDelay={700}/>
            <h3>UI and Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
            <br></br>
            <p>Experienced Front End (UI) with React Js and PHP Developer with a demonstrated history of working in the information technology and services industry. Skilled in React Js, Javascript, HTML5, CSS3, PHP, WordPress, CakePHP, Yii, Codeigniter, MySql, Angular, and Databases. Strong engineering professional with a Master's Degree focused in Computer Science from JNTU.
I am a passionate UI/Web Developer and Designer, having 5+ years of experience in UI/Web Development and Design. I have been working on various technologies in these 5 years.
I have created more than 30 websites.I am an Extensive web Developer who makes his own design for the clients.</p>
<p>I do work on the various Scripting libraries like Javascript and ReactJs etc. I have been working with SEO team and Marketing team as well, where I got the vast knowledge on the Off-Page Optimization and the Email Templates.
I have worked PHP,CMS(Wordpress), MySql, CakePHP, JQuery,Ajax,HTML5,Bootstrap, CSS3,Sass,Less,
I have Worked on Beaver Builder, Gutenberg builder, WPBakery Builder for more than a year and knows the most the builder hacks. 
            </p>
            
            </div>
            )
        }
    }
    
export default About