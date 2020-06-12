import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {scale:'c',temp:0}
  }

  handleCelsius = (e)=>{
    this.setState({scale:'c', temp:e.target.value})
  }
  handleFahrenheit = (e)=>{
    this.setState({scale:'f', temp:e.target.value})
  }

  render(){
    const temp = this.state.temp
    const scale = this.state.scale
    const celsius = scale === 'f' ? (temp -32)*5/9 : temp;
    const fahrenheit = scale === 'c' ? (temp * 9/5) +32 : temp;

    return (
      <div>
      <fieldset>
        <legend>Scale Celsius</legend>
        <input value={celsius} onChange={this.handleCelsius}/>
      </fieldset>

      <fieldset>
        <legend>Scale Fahrenheit</legend>
        <input value={fahrenheit} onChange={this.handleFahrenheit}/>
      </fieldset>
      </div>

    )
  }
}

class Inputs extends React.Component {
  render(){
    return(
      <fieldset>
        <legend>Scale this.props.scale</legend>
        <input value={this.props} onChange={this.props.func}/>
      </fieldset>
    
    )
  }
}



ReactDOM.render(
  
    <Calculator />,
  document.getElementById('root')
);


