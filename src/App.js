import './App.css';
import  { useState } from 'react';
import Statistics from './components/Statistics/statistics';
import Section from './components/Container/container';
import FeedbackOptions from './components/Feedback/feedback';


export default function App() {

  const [goodRate, setGoodRate] = useState(0);
  const [neutralRate, setNeutralRate] = useState(0);
  const [badRate, setBadRate] = useState(0);


  const handleCount = event => {

   switch (event.target.name) {
     case 'good':
       setGoodRate((prevState) => prevState +1 );
       break;

     case 'neutral':
       setNeutralRate((prevState) => prevState + 1);
       break;
     
     case  'bad':
       setBadRate((prevState) => prevState + 1)
       break;

     default:
       return;  
   }

  };

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return goodRate + neutralRate + badRate;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalRate = countTotalFeedback();
    return Math.round((goodRate / totalRate) * 100);
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleCount}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={goodRate}
            neutral={neutralRate}
            bad={badRate}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }

