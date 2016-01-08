var makeString = require('./makeString');
var defaultConfig = require('./defaultConfig.json');

function create() {
    var pluginConfig = defaultConfig;

    function getConfig() {
        return pluginConfig;
    }

    function setConfig(config) {
        pluginConfig = config;
    }

    function info() {
        return require('../package.json');
    }

    function apply(app) {
        var server = app.server;

        server.get('/api/sample/config', function(req, res) {
            res.jsonp(pluginConfig);
        });

        server.get('/api/sample/generate', function(req, res) {
            res.jsonp(makeString(pluginConfig.characters, pluginConfig.minLength, pluginConfig.maxLength));
        });
    }

    return {
        info,
        apply,
        getConfig,
        setConfig
    };
}

module.exports = create;