import React from "react";
import "./inputText.css"
class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      flag:false
    };
  }
  handleClick = () => {
    this.setState({flag:true})
    this.setState("")
    
  };
  render() {
    return (
      <div className="container">
        <textarea id="input"
        value={this.state.input}
        placeholder="Enter your text here"
        onChange={(e) => this.setState({ input: e.target.value })}
        />
        <br/>
        <button id="button" onClick={() => this.handleClick()}>Save Text</button>
       {this.state.flag===true?<p id="p">{this.state.input.toUpperCase()}</p>:<></>}
       
      </div>
    );
  }
}
export default InputText
