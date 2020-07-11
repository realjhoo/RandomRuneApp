import React from 'react';

const randomNumber = () => {
  // generate a random number between 0 and 23
  let max = 23;
  let randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
};

export default randomNumber;
