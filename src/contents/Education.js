import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <div className="container">
                    <h1 className="subtopic">My Education</h1>
                    <Widecard title="B.Tech Software Engineering" where="JNTU University Hyd" from="July 2008" to="May 2012"/>
                    <Widecard title="Intermidate" where="Sandeepani Junior College" from="2006" to="2008"/>
                    <Widecard title="SSC" where="A.P.T.W.R(Boys) School" from="2001" to="2006"/>
                </div>
            </div>
            )
        }
    }
    
export default Education