'use strict';

exports.handler = async (event) => {
  const response = {
    statusCode: 500,
    body: JSON.stringify('Something went wrong!'),
  };
  try {
    let requestBody;
    if (typeof event === 'string') {
      requestBody = JSON.parse(event);
    } else {
      requestBody = event;
    }

    if (!requestBody.hasOwnProperty('roll')) {
      requestBody.roll = false;
    }

    if (!requestBody.hasOwnProperty('userChoice')) {
      requestBody.userChoice = null;
    }

    if (requestBody.roll) {
      response.statusCode = 200;
      response.body = JSON.stringify(requestBody);
    } else {
      const endGame = Math.random() < 0.15; // default 15% chance of true
      requestBody.roll = endGame;
      response.statusCode = 200;
      response.body = JSON.stringify(requestBody);
    }
  } catch (error) {
    console.error('Error appending endGame property to requestBody', error);
    response.statusCode = 500;
    response.body = JSON.stringify({ message: 'Internal Server Error' });
  }
  return response;
};
