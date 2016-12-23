console.log("Bot is now starting . . .");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var stream = T.stream('user');
stream.on('tweet', tweetMention);

function tweetMention(eventMsg) {
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;
    if (text.match(/@INSERT_YOUR_@NAME/g)) {
        text = text.replace("@INSERT_YOUR_@NAME", "");
        tweetIt('@'+ from +' ' + text, eventMsg.id_str);
    }   
}
function tweetIt(txt, id){
  var tweet = {
    status: txt,
    in_reply_to_status_id: id
  }
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err){
      console.log("Tweet did not post!");
    } else {
      console.log("Tweeted: " + tweet.status);
    }
  }
}
