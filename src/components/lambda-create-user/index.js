const dynamoose = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: String,
  sex: String,
  age: Number,
  race: String,
  class: String,
});

const User = dynamoose.model('quest-characters', userSchema);

exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);

  try {
    const id = uuidv4();

    const newUser = new User({
      id: id,
      name: requestBody.name || '',
      sex: requestBody.sex || '',
      age: requestBody.age || 0,
      race: requestBody.race || '',
      class: requestBody.class || '',
    });

    await newUser.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User has been created', id: id }),
    };
  } catch (error) {
    console.error('Error creating user:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating user' }),
    };
  }
};