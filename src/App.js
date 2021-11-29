import './App.css';
import { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage =
      Math.round((good / this.countTotalFeedback()) * 100) + '%';
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
