import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import {Container, Col, Row } from 'react-bootstrap';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            
                    <Container>
                    <h1 className="subtopic">My Education</h1>
                    <Row>
                        <Col sm={4} className="timeline-content-left">
                            <Widecard title="B.Tech Software Engineering" where="JNTU University Hyd" from="July 2008" to="May 2012"/>
                        </Col>
                        <Col sm={4} className="timeline-content-left">
                            <Widecard title="Intermidate" where="Sandeepani Junior College" from="2006" to="2008"/>
                        </Col>
                        <Col sm={4} className="timeline-content-left">
                             <Widecard title="SSC" where="A.P.T.W.R(Boys) School" from="2001" to="2006"/>
                        </Col>
                        
                    </Row>
                    
                    </Container>


                    
                    {/* <Widecard title="B.Tech Software Engineering" where="JNTU University Hyd" from="July 2008" to="May 2012"/>
                    <Widecard title="Intermidate" where="Sandeepani Junior College" from="2006" to="2008"/>
                    <Widecard title="SSC" where="A.P.T.W.R(Boys) School" from="2001" to="2006"/> */}
                </div>
            
            )
        }
    }
    
export default Education