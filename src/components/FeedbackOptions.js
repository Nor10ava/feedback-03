import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(el => (
        <button
          key={uuidv4()}
          type="button"
          name={el}
          onClick={onLeaveFeedback}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
