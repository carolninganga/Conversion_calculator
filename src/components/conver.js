import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './style.css'

function DispWeight({ kToLb, input }) {
  const convertToPounds = () =>
    (parseFloat(input) * 0.45359237).toFixed(2) + "lb";
  const convertToKilograms = () =>
    (parseFloat(input) * 2.20462262).toFixed(2) + "kg";
  return (
    <>
      <div>{kToLb ? convertToPounds() : convertToKilograms()}</div>
      <br />
      {kToLb ? "Kilograms" : "Pounds"}
      <br />
    </>
  );
}
function DispTemperature({ cToF, input }) {
  const convertToCelsius = () =>
    (((parseFloat(input) - 32) * 5) / 9).toFixed(2);
  const convertToFahrenheight = () =>
    ((parseFloat(input) * 9) / 5 + 32).toFixed(2);
  return (
    <>
      <div>
        {cToF ? convertToFahrenheight() : convertToCelsius()}
        &deg;
        {cToF ? "F" : "C"}
      </div>
      <br />
      {cToF ? "Celsius" : "Fahrenheit"}
      <br />
    </>
  );
}

function DispDistance({ MToKm, input }) {
  const convertToMiles = () =>
    (parseFloat(input) * 1.60934).toFixed(2) + "miles";
  const convertToKilometers = () =>
    (parseFloat(input) / 0.62136).toFixed(2) + "km";
  return (
    <>
      <div>{MToKm ? convertToMiles() : convertToKilometers()}</div>
      <br />
      {MToKm ? "Kilometers" : "Miles"}
      <br />
    </>
  );
}


class Weight extends React.Component {
  state = {
    input: "0",
    calcWeight: true,
    calcTemp: false,
    calcDistance: false,
    kToLb: false,
    cToF: false,
    MToKm: false
  };

  handleChange = ({ target: { value } }) => this.setState({ input: value });

  toggleConv = () =>
    this.setState({ kToLb: !this.state.kToLb, cToF: !this.state.cToF, MToKm: !this.state.MToKm });

  toggleType = ({ target: { value } }) => {
    console.log(value);
    const values = {
      calcWeight: false,
      calcTemp: false,
      calcDistance: false,
    };

    this.setState(
      {
        ...values,
        [value]: true,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="hero">
      <Jumbotron>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>

      <h1>Awesome Conversion Calculator</h1>
        {this.state.calcTemp && (
          <DispTemperature cToF={this.state.cToF} input={this.state.input} />
        )}
        {this.state.calcWeight && (
          <DispWeight kToLb={this.state.kToLb} input={this.state.input} />
        )}
        {this.state.calcDistance && (
          <DispDistance MToKm={this.state.MToKm} input={this.state.input} />
        )}
        
        
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.input}
        />

        <br />
        <button onClick={this.toggleConv}>Switch</button>

        <br />
        <select onChange={this.toggleType}>
          <option value='calcWeight'>Weight</option>
          <option value='calcTemp'>Temperature</option>
          <option value='calcDistance'>Distance</option>
        </select>
        </Jumbotron>
      </div>
    );
  }

  // constructor(props){
  //   super(props)
  //   this.state = {scale:'p',temp:0}
  // }

  // handlePounds = (e)=>{
  //   this.setState({scale:'p', temp:e.target.value})
  // }
  // handleKilograms = (e)=>{
  //   this.setState({scale:'k', temp:e.target.value})
  // }

  // render(){
  //   const temp = this.state.temp
  //   const scale = this.state.scale
  //   const pounds = scale === 'p' ? (temp * 0.454): temp;
  //   const kilograms = scale === 'k' ? (temp / 2.205)  : temp;

  //   return (
  //     <div>
  //     <div>
  //       <h1 className="text-center"> Convertor Calculator</h1>
  //     </div>
  //   <Inputs scalename="Pounds" value={pounds} func={this.handlePounds}/>
  //   <Inputs scalename="Kilograms" value={kilograms} func={this.handleKilograms}/>
  //     </div>
  //   )
  // }
}

// class Inputs extends React.Component {
//   render() {
//     return (
//       <fieldset>
//         <legend> Scale {this.props.scalename} </legend>
//         <input value={this.props.value} onChange={this.props.func} />
//       </fieldset>
//     );
//   }
// }

export default Weight;
