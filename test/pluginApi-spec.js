var expect = require('chai').expect;
var plugin = require('../sample/plugin.js');

describe('Plugin API', function() {

    var instance;

    beforeEach(function() {
        instance = plugin();
    });

    it('should provide info about the plugin', function() {
        var actual = instance.info();
        expect(actual).to.have.property('name');
        expect(actual).to.have.property('description');
        expect(actual).to.have.property('keywords');
    });

    it('should apply methods to the supplied application', function(done) {
        var app = {
            server: {
                get: (path, req, res) => (path === '/api/sample/generate') ? done() : false
            }
        };
        instance.apply(app);
    });

    it('should provide a default config', function() {
        var actual = instance.getConfig();
        expect(actual).to.have.property('minLength');
        expect(actual).to.have.property('maxLength');
        expect(actual).to.have.property('characters');
    });

    it('should allow the default config to be changed', function() {
        var expected = {
            minLength: 100,
            maxLength: 1000,
            characters: 'abc:xyz'
        };
        expect(instance.getConfig()).to.not.deep.equal(expected);

        instance.setConfig(expected);
        expect(instance.getConfig()).to.deep.equal(expected);
    });
});