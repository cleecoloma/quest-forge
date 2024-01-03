const dynamoose = require('dynamoose');

const userSchema = new dynamoose.Schema({
  id: Number,
  name: String,
  age: Number,
  race: {
    type: String,
  },
  class: {
    type: String,
  },
});

const User = dynamoose.model('midterm-users', userSchema);

exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const id = requestBody.id;
  const name = requestBody.name;
  const age = requestBody.age;
  const race = requestBody.race;
  const userClass = requestBody.class;

  try {
    const user = new User({
      id: id,
      name: name,
      age: age,
      race: race,
      class: userClass,
    });

    console.log('User object:', user);

    await user.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User has been created' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating user' }),
    };
  }
};
