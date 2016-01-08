# Product Monitor Sample Plugin
A sample plugin (template) for product-monitor that adds an endpoint to generate a random string of characters.

## Development

```
npm install
npm test
```

## Exposed methods
### plugin.apply(app)
Applies the plugin to a product-monitor app.

### plugin.info()
Returns the `title`, `description`, and `type` for the plugin:

```{
    title: 'Sample',
    description: 'Sample plugin',
    type: 'template'
}
```

### plugin.getConfig()
Returns the config applied to the plugin.

### plugin.setConfig(pluginConfig)
Changes the config applied to the plugin.
