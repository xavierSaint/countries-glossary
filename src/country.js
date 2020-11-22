import React, { Component } from 'react';
import './country.css';
class  Country extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countryName : this.props.name,
            nativeName: this.props.nativeName,
            capital : this.props.capital,
            area : this.props.area,
            region: this.props.region,
            currency: this.props.currencies[0].name,
            currencySymbol: this.props.currencies[0].symbol,
            borders: this.props.borders.map(
                (country,idx) => <li className="border-value" key={idx}>{country}</li>
            ),
            flag: this.props.flag,
         }
    }
    render() { 
        return (
            <div className="country">
                <p className="field"><span className="label">Country: </span>{this.state.countryName}({this.state.nativeName})</p>
                <p className="field"><span className="label">Capital: </span>{this.state.capital}</p>
                <p className="field"><span className="label">Area: </span>{this.state.area} sq.km</p>
                <p className="field"><span className="label">Region: </span>{this.state.region}</p>
                <p className="field"><span className="label">Currency: </span>{this.state.currency} ({this.state.currencySymbol})</p>
                <div className="border-container">
                    <p className="field" id="border"><span className="label">Shares borders with: </span>{this.state.borders}</p>
                </div>
                <div className="flag-container">
                    <img className="flag-image" src={this.state.flag} alt={this.state.countryName}></img>
                </div>
            </div>
        );
    }
}
 
export default Country;