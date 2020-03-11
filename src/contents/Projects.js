
import React, { Component } from 'react';
import profilepic from '../img/comakeit.jpg';

class Projects extends Component {
    

    render() {
        return (
            
            <div className="condiv">
                 <h1 className="subtopic">Projects</h1>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                            <div className="card">
                                <img src={profilepic} class="card-img-top" alt="..." />
                                <div className="card-body"><h5 className="card-title">coMakeIT</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://www.comakeit.com/"  target="_blank" className="btn btn-success">View Website</a>
                                </div>                     
                            
                            </div>
                            </div>
                            <div class="col-sm">
                            <div className="card">
                                <img src={profilepic} class="card-img-top"  alt="..."/>
                                <div className="card-body"><h5 className="card-title">coMakeIT</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://www.comakeit.com/" target="_blank" className="btn btn-success">View Website </a>
                                </div>                     
                            
                            </div>
                            </div>
                            <div class="col-sm">
                            <div className="card">
                            <img src={profilepic} class="card-img-top"  alt="..."/>
                                <div className="card-body"><h5 className="card-title">coMakeIT</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" target="_blank" className="btn btn-success">View Website</a>
                                </div>                     
                            
                            </div>
                            </div>
                        </div>
                    </div>
                    

               </div>
                
            )
        }
    }
    
    export default Projects


