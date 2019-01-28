const Tweet = require("../../models/Tweet");

export default {
  getTweets: () => Tweet.find({})
};
