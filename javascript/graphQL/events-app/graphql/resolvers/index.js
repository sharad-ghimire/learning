const Event = require('../../models/Event.js');
const User = require('../../models/User.js');
const bcrypt = require('bcryptjs');

const events = async (eventIds) => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map((event) => {
      return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event.creator)
      };
    });
  } catch (error) {
    throw error;
  }
};

const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return {
          ...event._doc,
          _id: event._doc._id.toString(),
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator) ///??????WTF???
        };
      });
    } catch (error) {
      throw error;
    }
  },
  createEvent: async ({ input }) => {
    const event = new Event({
      title: input.title,
      description: input.description,
      price: +input.price,
      date: new Date(input.date),
      creator: '5c6d4bda618ed42464127e8a'
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = {
        ...result._doc,
        _id: result.id,
        date: new Date(result._doc.date).toISOString(),
        creator: user.bind(this, result.creator)
      };
      const creator = await User.findById('5c6d4bda618ed42464127e8a');

      if (!creator) {
        throw new Error('User not found');
      }
      creator.createdEvents.push(event);
      await creator.save(); // not storing it in const becoz we are not storing it anyways

      return createdEvent;
    } catch (error) {
      throw error;
    }
  },
  createUser: async ({ input }) => {
    try {
      const user = await User.findOne({ email: input.email });
      if (user) {
        throw new Error('User exists already');
      }
      const hashedPassword = await bcrypt.hash(input.password, 12);

      const newUser = new User({
        email: input.email,
        password: hashedPassword
      });
      const result = await newUser.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (error) {
      throw error;
    }
  }
};
