const mongoose = require('mongoose');

const UserTopicSchema = new mongoose.Schema({
  UserEMailID:String,
  topic:{
    0:String,
    1:String,
    2:String,
    3:String,
    4:String,
    5:String,
    6:String,
    7:String,
    8:String,
    9:String
  }
});
const UserTopic = mongoose.model('UserTopic', UserTopicSchema);
module.exports = UserTopic;