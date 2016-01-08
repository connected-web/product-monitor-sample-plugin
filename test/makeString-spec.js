var expect = require('chai').expect;
var makeString = require('../sample/makeString');

var testCount = 25;

describe('Make String', function() {

    describe('Random length', function() {
        for (var i = 0; i < testCount; i++) {
            var minLength = 5;
            var maxLength = 50;
            var actual = makeString('abc', minLength, maxLength);

            (function(actual, minLength, maxLength) {
                it(`should generate a random string at a random length between ${minLength} and ${maxLength}: ${actual}`, function() {
                    expect(actual.length).to.be.at.least(minLength);
                    expect(actual.length).to.be.at.most(maxLength);
                });
            })(actual, minLength, maxLength);
        }
    });

    describe('Expected characters', function() {
        for (var i = 0; i < testCount; i++) {
            var length = 7;
            var characters = 'abcde';
            var expected = new RegExp(`([${characters}]{${length}})`);
            var actual = makeString(characters, length, length);

            (function(actual, expected) {
                it(`should generate a random string using only the supplied characters '${characters}': ${actual}`, function() {
                    expect(actual).to.match(expected);
                });
            })(actual, expected);
        }
    });

    describe('Complex characters', function() {
        for (var i = 0; i < testCount; i++) {
            var length = 75;
            var actual = makeString(`abcxyz01234567890#£$%^&*()"'`, length, length);
            var expected = new RegExp(`([abcxyz01234567890#£$%^&*\(\)"']{${length}})`);

            (function(actual, expected) {
                it('should generate a random string using complex characters: ' + actual, function() {
                    expect(actual).to.match(expected);
                });
            })(actual, expected);
        }
    });

    describe('Occasional spaces', function() {
        for (var i = 0; i < testCount; i++) {
            var minLength = 25;
            var maxLength = 75;
            var actual = makeString(`01234567890ABCDEF `, minLength, maxLength);
            var expected = new RegExp(`([01234567890ABCDEF ]{${minLength},${maxLength}})`);

            (function(actual, expected) {
                it('should generate a random length string using occasional spaces: ' + actual, function() {
                    expect(actual).to.match(expected);
                });
            })(actual, expected);
        }
    });
});