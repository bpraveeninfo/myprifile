import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Experinces extends Component {
    render() {
        return (
            <div className="condiv">
                
                <div className="container">
                    <h1 className="subtopic">My Experinces</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card h-100 timeline-content-left">
                                <div className="card-body">
                                    <h3 className="card-title">Software Engineer</h3>
                                    <h5 className="card-subtitle mb-2 text-muted">ComakeIT Software PVT LTD </h5>
                                    <h6><small>Jan 2017 - Prasent </small></h6>
                                    <p class="card-text">Currently Im working as senior software engneering since september 2017,(1.5 years) as if am learning & improving in various technologies, working on few technologies as company aspects. </p>
                                    <a href="https://www.comakeit.com/" className="card-link">www.ComakeIT.com</a>
                                    
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4">
                            <div className="card h-100 timeline-content-right">
                                <div className="card-body">
                                    <h3 className="card-title">Software Engineer </h3>
                                    <h5 className="card-subtitle mb-2 text-muted">Vgyan It Services PVT LTD </h5>
                                    <h6><small>Jun 2014 - Sep 2017 </small></h6>
                                    <p class="card-text">me worked as a junior software engneering since august 2014 to september 2017(3 years) as if am learning & improving in various technologies, working on few technologies as company aspects..</p>
                                    <a href="http://www.vgyanitservices.com/" className="card-link">www.vgyanitservices.com</a>
                                   
                                </div>
                            </div>
                    </div>
                    

                        
                    </div>
                    
                    
                </div>
               
            </div>
            )
        }
    }
    
export default Experinces