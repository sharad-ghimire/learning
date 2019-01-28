const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  text: String
});

export default mongoose.model("Tweet", TweetSchema);
