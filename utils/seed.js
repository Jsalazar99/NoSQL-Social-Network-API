const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);

const users = [
  {
    username: 'randomUser1',
    email: 'me@me.com',
  },
  {
    username: 'randomUser2',
    email: 'me2@me.com',
  },
  {
    username: 'randomUser3',
    email: 'me3@me.com',
  }
];

const thoughts = [
  {
    thoughtText: 'my first thought',
    username: 'randomUser1',
  },
  {
    thoughtText: 'my second thought',
    username: 'randomUser2',
  },
  {
    thoughtText: 'my third thought',
    username: 'randomUser3',
  }
];

connection.once('open', async () => {
  console.log('connected');


  // Add students to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  await User.collection.insertMany(users);


  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
