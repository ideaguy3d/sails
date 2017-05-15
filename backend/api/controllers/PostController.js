/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Twit = require('twit');

module.exports = {
    tweet: function (req, res) {
        User.findOne(req.userId, function (err, user) {
            var T = new Twit({
                consumer_key: config.TWITTER_KEY,
                consumer_secret: config.TWITTER_SECRET,
                // these were hard coded from a fake twitter account
                access_token: user.twitterToken,
                access_token_secret: user.twitterSecret
            });

            T.post('statuses/update',
                { status: '... well, Ello World ^_^/' },
                function (err, data, response) {
                    console.log(data, err);
                }
            );
        });
    }
};

