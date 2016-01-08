var makeString = require('./makeString');
var defaultConfig = require('./defaultConfig.json');
var pluginConfig = defaultConfig;

function getConfig() {
    return pluginConfig;
}

function setConfig(config) {
    pluginConfig = config;
}

function info() {
    return {
        title: 'Sample',
        description: 'Sample plugin',
        type: 'template'
    };
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

module.exports = {
    info,
    apply,
    getConfig,
    setConfig
};