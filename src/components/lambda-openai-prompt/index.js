'use strict';

require('dotenv').config();
const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');
const lambda = new LambdaClient({ region: 'us-west-2' });
const axios = require('axios');
const OPEN_AI_URL = process.env.OPEN_AI_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

exports.handler = async (event) => {
  console.log('We hit the event!', event);
  const requestBody = event.body;
  const user = event.user;
  const { scene, userChoice, roll } = requestBody;

  const header = {
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  const initialUserChoice = userChoice || '';

  const keywords = ['help', 'rest', 'heal', 'aid', 'recover'];

  const includesKeyword = keywords.some((keyword) =>
    initialUserChoice.includes(keyword)
  );

  if (!requestBody.roll || includesKeyword) {
    const data = {
      messages: [
        {
          role: 'user',
          content: `An adventurer named ${user.name}, a ${user.age}-year-old ${user.sex} ${user.race} ${user.class}, in a previous scene of ${scene}. After this scene, the character named ${user.name} picks: ${userChoice}. Your response will in a JSON object with the following properties. First, user object with properties name, age, race, class. Second, string named 'scene' that explains what happens next in 2 or 3 sentences referencing ${userChoice}. Third, array named 'options' that generates 4 options/elements in 4 words or less where each option is an action that user can choose next.`,
        },
      ],
      model: 'gpt-3.5-turbo',
    };
    console.log('Here is our data:', data);
    try {
      const openAiResponse = await axios.post(OPEN_AI_URL, data, header);
      const openAi = openAiResponse.data.choices[0].message.content;
      console.log('Here is our open ai response before being parsed:', openAi);
      const params = {
        FunctionName: 'quest-roll',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(openAi),
      };

      const response = await lambda.send(new InvokeCommand(params));

      const payload = Buffer.from(response.Payload).toString();

      console.log('Response from characterRoll:', response, payload);
      const result = JSON.parse(payload);

      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error('Encountered error with prompt request to OpenAI', error);
    }
  } else {
    const data = {
      messages: [
        {
          role: 'user',
          content: `Your response will in a JSON object with the following properties. First, user object with properties ${user.name},${user.sex}, ${user.age}, ${user.race}, and ${user.class}. Second, string named 'deathScene' that explains how the user dies based on ${user.name}'s actions: ${userChoice}. This deathScene will be at most 2 sentences that will kill the character. Reference scene: ${scene} on how to build the death scene. Third, string named 'roll' with value ${roll}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    };
    console.log('Here is our data:', data);
    try {
      const openAiResponse = await axios.post(OPEN_AI_URL, data, header);
      const openAi = openAiResponse.data.choices[0].message.content;
      console.log('Here is our open ai response before being parsed:', openAi);
      const params = {
        FunctionName: 'quest-roll',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(openAi),
      };

      const response = await lambda.send(new InvokeCommand(params));

      const payload = Buffer.from(response.Payload).toString();

      console.log('Response from characterRoll:', response);

      const result = JSON.parse(payload);
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error('Encountered error with prompt request to OpenAI', error);
    }
  }
};
