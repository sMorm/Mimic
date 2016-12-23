# Mimic
JavaScript Stream Bot for Twitter

These programs uses ttezel's Twitter API Client for node called 'twit'.

  Head over to his repository: https://github.com/ttezel/twit
  
  node JavaScript runtime environment: https://nodejs.org/en/
  
  How to setup node alongside the Twit client: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV
    (Thanks to Daniel Shiffman and ttezel)
  
  
replyBot.js
  
  Functionality: A bot that allows a user to tweet a custom message to a given @TwitterHandle, with a custom message.
  
Functions:
    The tweetEvent() function, given the eventMsg parameter, is a callback function that is invoked when there is a new tweet 
    found on the stream. tweetEvent() then analyzes the tweet by checking whether if the tweet was posted by the person we are  
    looking for.And if it is, it will increment count, which keeps track of the number of iterations, but also allows us to 
    give our Tweet a unique string to avoid collision. It's necessary to avoid collisions because Twitter will only allow  
    unique tweets to be posted within a 24-hour time-frame.Finally, if tweetEvent() found that it was in fact the person that 
    we are looking for, it will then invoke tweetIt() which
    takes parameters 'txt'(the message we want to tweet to the user tweeting) and 'eventMsg'. The latter is necessary because
    we want to be able to reply back to the tweet instead of simply tweeting the person(which won't show under the tweet).
    
How to run the program:

1) Make sure that you've correctly configured your Twitter Keys and node, which can be done by following Daniel Shiffman's 
first three videos in the playlist.

2) Modify the program by changing 'var userToMatch' to @some_username WITHOUT THE @ JUST THE USERNAME

3) Customize the tweet to send to the user by modifying 'var stringToTweet'

4) Finally, be sure to remember that Twitter's limit is still 140 characters, to avoid errors, make sure your string is less
than 140 characters by taking the length of your 'stringToTweet' and subtract it by the length of 'userToMatch'

5) Once everything is all set up, go to your working directly and enter the command :
                                                                                      node replyBot.js
                                                                                      
mimicBot.js
  Functionality: A bot that allows a user to instantly reply back to a tweet that they were mentioned in, with the same
  message
  
Functions:
    tweetMention() is a callback function that takes eventMsg when a tweet is populated onto a timeline. The function uses
    regular expressions, or regex, to parse through the tweet that the user is mentioned in. If the user is found, the
    the function removes the user's @user_name from the tweet, and invokes tweetIt(). The function tweetIt() is invoked with 
    the two paramters, text(the text to send back to the user invoking the original tweet) and the tweet ID so that we are
    able to post a reply directly to the tweet.
    
 How to run the program:
 
  1) Make sure that you've correctly configured your Twitter Keys and node, which can be done by following Daniel Shiffman's
  first three videos in the playlist.
  
  2) Modify line 15: inserting YOUR Twitter handle, i.e. @Jack. "/@ /g" lets javascript know that you're parsing a regular
  expression. So replace 'INSERT_YOUR_@NAME' on line 15 and 16 with your Twitter handle
  
  3) For this program, we don't have to modify the text we're going to tweet out because if the user sending it to us did not
  exceed the 140 character limit, we won't either. So after completing steps 1 and 2, just run :
                                                                                                  node mimicBot.js
    
    
