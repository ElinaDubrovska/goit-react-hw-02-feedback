import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

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
    const { good, neutral, bad } = this.state;
    return(
      <>
    <Section title = "Please leave feedback">
      <FeedbackOptions variants={Object.keys(this.state)}
      onClick = {this.buttonHandler}>
        
      </FeedbackOptions>
    </Section>
    <Section title = "Statistics">
          { (good + bad + neutral)>0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + bad + neutral}
            positivePercentage = {((good*100)/ (good + bad + neutral)).toFixed(2) }
          /> : <Notification/>
         }
       </Section>
      </>
    )
  }
}