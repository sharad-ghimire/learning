const Event = require('../../models/Event.js');
const User = require('../../models/User.js');
const Booking = require('../../models/Booking.js');

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

const singleEventFetcher = async (eventId) => {
  try {
    const event = await Event.findById(eventId);
    return {
      ...event._doc, //get all the data in document
      _id: event.id, //replace the id
      creator: user(this, event.creator)
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
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return {
          ...booking._doc,
          _id: booking.id,
          user: user.bind(this, booking.user),
          event: singleEventFetcher.bind(this, booking.event),
          createdAt: new Date(booking.createdAt).toISOString(),
          updatedAt: new Date(booking.updatedAt).toISOString()
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
  },
  bookEvent: async ({ eventId }) => {
    const fetchedEvent = await Event.findOne({ _id: eventId });
    const booking = new Booking({
      user: '5c6d4bda618ed42464127e8a',
      event: fetchedEvent
    });
    const result = await booking.save();
    return {
      ...result._doc,
      _id: result.id,
      user: user.bind(this, result.user),
      event: singleEventFetcher.bind(this, result.event),
      createdAt: new Date(result.createdAt).toISOString(),
      updatedAt: new Date(result.updatedAt).toISOString()
    };
  },
  cancelBooking: async ({ bookingId }) => {
    try {
      const booking = Booking.findById(bookingId).populate('event');
      const event = {
        ...booking.event._doc,
        _id: booking.event.id,
        creator: user.bind(this, booking.event._doc.creator)
      };
      await Booking.deleteOne({ _id: bookingId });
      return event;
    } catch (error) {
      throw error;
    }
  }
};
