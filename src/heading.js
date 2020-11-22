import React, { Component } from 'react';
import './heading.css'

class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <h1 className="heading">COUNTRIES-GLOSSARY</h1>
                <p className="message">Scroll down to your favourite country</p>
            </div>
        );
    }
}
 
export default Heading;