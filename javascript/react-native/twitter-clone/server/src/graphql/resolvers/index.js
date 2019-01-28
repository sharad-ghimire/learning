const TweetResolvers = require("./tweet-resolvers");

export default {
  Query: {
    getTweets: TweetResolvers.getTweets
  }
};
