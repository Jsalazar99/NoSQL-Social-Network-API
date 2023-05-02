const { Thought, Reaction, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThought(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought by ID
  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.objectId })
      //.select('-__v');

      if (!thoughts) {
        return res.status(404).json({ message: 'None with that ID' });
      }

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thoughts = await Thought.create(req.body);
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought by ID
  async deleteThought(req, res) {
    try {
      const thoughts = await Thought.findOneAndDelete({ _id: req.params.objectId });

      if (!thoughts) {
        return res.status(404).json({ message: 'None with that ID' });
      }

      // need help here????
      await Thought.deleteMany({ _id: { $in: thoughtText.username } });
      res.json({ message: 'Thought and User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought by ID
  async updateThought(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate(
        { _id: req.params.objectId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thoughts) {
        return res.status(404).json({ message: 'None with this ID!' });
      }

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a reaction
  async createReaction(req, res) {
    try {
      const reaction = await Reaction.create(req.body);
      res.json(reaction);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a reaction by ID
  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndDelete({ _id: req.params.objectId });

      if (!reaction) {
        return res.status(404).json({ message: 'None with that ID' });
      }
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
