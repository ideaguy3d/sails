/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

    //console.log("Ello there ^_^/", (1+9)%2);

    Emoji.create([{
        text: '=)'
    },{
        text: '<=)'
    },{
        text: '>=)'
    }]).exec(function(err, result){
        if (err) {
            console.log("there was an error !!! ):", err);
            cb(err);
        } else {
            console.log("it did work ! :)");
            cb();
        }
    });

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

};
