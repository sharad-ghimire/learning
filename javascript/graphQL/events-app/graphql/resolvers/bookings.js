const { transformBooking, transformEvent } = require('./merge');

const Booking = require('../../models/Booking.js');
const Event = require('../../models/Event.js');

module.exports = {
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return transformBooking(booking);
      });
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
    return transformBooking(result);
  },
  cancelBooking: async ({ bookingId }) => {
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
