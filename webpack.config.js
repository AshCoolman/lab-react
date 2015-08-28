module.exports = {
    entry: "./src/entry.coffee",
    output: {
        path: 'dist',
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel",  exclude: /(node_modules|bower_components)/ },
            { test: /\.jade$/, loader: "jade" },
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.css$/, loader: "style!css" }
        ]

    }
};