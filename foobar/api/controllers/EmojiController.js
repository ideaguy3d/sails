/**
 * EmojiController
 *
 * @description :: Server-side logic for managing emojis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function foodMessage(str) {
    this.zAction = "Food Action";
    return this.zAction + ": you hit the food sub action ! ^_^/, " + str;
}

module.exports = {
	food: function (req, res) {
        res.send(foodMessage("foobar!!"));
    }
};

