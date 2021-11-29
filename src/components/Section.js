import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
