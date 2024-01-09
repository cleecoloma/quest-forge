'use strict';

const dynamoose = require('dynamoose');
const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');

const lambda = new LambdaClient({ region: 'us-west-2' });

const userSchema = new dynamoose.Schema({
  id: Number,
  name: String,
  age: Number,
  sex: String,
  race: String,
  class: String,
});

const User = dynamoose.model('quest-characters', userSchema);

exports.handler = async (event) => {
  const userId = parseInt(event.pathParameters.id);

  let body;

  const eventBody = JSON.parse(event.body);
  if (eventBody) {
    body = eventBody;
  } else {
    body = {
      scene: '',
      options: ['', '', '', ''],
      roll: false,
      userChoice: '',
    };
  }

  try {
    const user = await User.get(userId);

    if (user) {
      const params = {
        FunctionName: 'quest-openai',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify({ user, body }),
      };

      const response = await lambda.send(new InvokeCommand(params));

      const payload = Buffer.from(response.Payload).toString();

      if (response.FunctionError) {
        throw new Error(`Lambda invocation error: ${response.FunctionError}`);
      }
      const result = JSON.parse(payload);
      const resultBody = JSON.parse(result.body);
      return resultBody;
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
