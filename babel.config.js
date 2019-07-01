module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env", {
                "useBuiltIns": "usage",
                "corejs": 2,
                "debug": true
            }
        ]
    ];
    const plugins = [
        // "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-transform-runtime", { "corejs": 2 }]
    ];
    return {
        presets,
        plugins
    };
};