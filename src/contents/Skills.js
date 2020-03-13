import React, { Component } from 'react';
import Cards from './Cards';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Javascript', 'HTML5','CSS3','JQuery','PHP','REACT JS','Bootstrap','Less', 'Sass','MySQl']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <div className="container">
                    <Cards></Cards>

                </div>
            
            {/* <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul> */}
           
            </div>
            )
        }
    }
    
    export default Skills