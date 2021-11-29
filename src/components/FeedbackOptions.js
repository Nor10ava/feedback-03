import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

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
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
