const dynamoose = require('dynamoose');

const userSchema = new dynamoose.Schema({
  id: {
    type: Number,
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
  console.log('HERES THE BODY', requestBody);

  try {
    let id = Math.floor(Math.random() * 1000000); // Generate a random id

    // Check if the item with the same ID already exists in DynamoDB
    const existingUser = await User.get(id);

    if (existingUser) {
      existingUser.name = requestBody.name || existingUser.name;
      existingUser.sex = requestBody.sex || existingUser.sex;
      existingUser.age = requestBody.age || existingUser.age;
      existingUser.race = requestBody.race || existingUser.race;
      existingUser.class = requestBody.class || existingUser.class;

      await existingUser.save();
    } else {
      const newUser = new User({
        id: id,
        name: requestBody.name || '',
        sex: requestBody.sex || '',
        age: requestBody.age || 0,
        race: requestBody.race || '',
        class: requestBody.class || '',
      });

      await newUser.save();
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'User has been created or updated',
        id: id,
      }),
    };
  } catch (error) {
    console.error('Error creating or updating user:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating or updating user' }),
    };
  }
};
