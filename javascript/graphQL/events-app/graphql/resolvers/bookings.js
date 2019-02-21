const { transformBooking, transformEvent } = require('./merge');

const Booking = require('../../models/Booking.js');
const Event = require('../../models/Event.js');

module.exports = {
  bookings: async (args, req) => {
    if (!req.isAuth) throw new Error('Unauthenticated!');

    try {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return transformBooking(booking);
      });
    } catch (error) {
      throw error;
    }
  },

  bookEvent: async ({ eventId }, req) => {
    if (!req.isAuth) throw new Error('Unauthenticated!');

    const fetchedEvent = await Event.findOne({ _id: eventId });
    const booking = new Booking({
      user: req.userId,
      event: fetchedEvent
    });
    const result = await booking.save();
    return transformBooking(result);
  },
  cancelBooking: async ({ bookingId }, req) => {
    if (!req.isAuth) throw new Error('Unauthenticated!');

    try {
      const booking = Booking.findById(bookingId).populate('event');
      const event = transformEvent(booking.event);
      await Booking.deleteOne({ _id: bookingId });
      return event;
    } catch (error) {
      throw error;
    }
  }
};
