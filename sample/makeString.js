function makeString(characters, minLength, maxLength) {
    var length = Math.round(Math.random() * (maxLength - minLength) + minLength);
    var string = '';
    for (var i = 0; i < length; i++) {
        var pick = Math.floor(Math.random() * characters.length);
        string += characters[pick];
    }
    return string;
}

module.exports = makeString;