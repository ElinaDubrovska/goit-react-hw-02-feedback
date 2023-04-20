import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  buttonHandler = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }
  render(){
    return(
      <>
      <FeedbackOptions variants={Object.keys(this.state)}
      onClick = {this.buttonHandler}>
        
      </FeedbackOptions>
      </>
    )
  }
}