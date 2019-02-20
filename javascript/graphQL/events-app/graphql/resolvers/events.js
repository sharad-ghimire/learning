const { transformEvent } = require('./merge');

const Event = require('../../models/Event.js');

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return transformEvent(event);
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
      createdEvent = transformEvent(result);
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
  }
};
