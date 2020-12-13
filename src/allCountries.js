import React, { Component } from 'react';
import Country from './country';
import Heading from './heading';

class AllCountries extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countryDetails: []
         }
    }

    componentDidMount(){
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url).then(res => res.json()).then(data => this.setState({countryDetails : data}));
    }

    render() { 
        return ( 
            <div>
                <Heading></Heading>
                {this.state.countryDetails.map((d, idx) => {
                return (<Country key={idx} name={d.name} nativeName={d.nativeName} 
                    capital={d.capital} area={d.area} region={d.region} flag={d.flag} 
                    currencies={d.currencies} borders={d.borders} alpha2Code={d.alpha2Code}></Country>)
              })}
            </div>
         );
    }
}
 
export default AllCountries;