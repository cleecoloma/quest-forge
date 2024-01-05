const dynamoose = require('dynamoose');

const userSchema = new dynamoose.Schema({
  id: {
    type: Number,
    hashKey: true,
  },
  name: String,
  age: Number,
  race: String,
  class: String,
});

const User = dynamoose.model('quest-characters', userSchema);

exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const id = requestBody.id;

  try {
    const userToUpdate = await User.get(id);
    if (!userToUpdate) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }

    userToUpdate.name = requestBody.name || userToUpdate.name;
    userToUpdate.age = requestBody.age || userToUpdate.age;
    userToUpdate.race = requestBody.race || userToUpdate.race;
    userToUpdate.class = requestBody.class || userToUpdate.class;

    await userToUpdate.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User has been updated' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating user' }),
    };
  }
};
