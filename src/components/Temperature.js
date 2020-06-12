import React from 'react';

class Temperature extends React.Component{
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
      <Inputs scalename="Celsius" value={celsius} func={this.handleCelsius}/>
      <Inputs scalename="Fahrenheit" value={fahrenheit} func={this.handleFahrenheit}/>
        </div>
      )
    }
  }
  
  
  class Inputs extends React.Component {
    render(){
      return(
        <fieldset>
          <legend> Scale {this.props.scalename} </legend>
          <input value={this.props.value} onChange={this.props.func}/>
        </fieldset>
      
      )
    }
  }

export default Temperature;