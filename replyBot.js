console.log("Reply to @user bot is now starting . . .\n");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');
stream.on('tweet', tweetEvent);

count = 0;
function tweetEvent(eventMsg) {
  
  var userToMatch = '@USERTOMENTION';
  var text = eventMsg.text;
  var personTweeting = eventMsg.user.screen_name;
  var stringToTweet = 'insert string here';

  if (personTweeting.toLowerCase() === userToMatch.toLowerCase()) {
    count++;
    console.log('@' + personTweeting + ' has tweeted!');
    var toSend = '@' + personTweeting + ' Attempt #' + count + ' INSERT STRING HERE';
    tweetIt(toSend, eventMsg);
  }
}
function tweetIt(txt, eventMsg){
  var tweet = {
    status: txt,
    in_reply_to_status_id: eventMsg.id_str
  }
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err){
      console.log("ERROR: Failed to tweet post.");
    } else {
      console.log("Successfully tweeted: " + tweet.status + "\n");
    }
  }
}
