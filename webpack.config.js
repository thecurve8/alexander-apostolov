const path = require('path');

module.exports = {
    resolve: {
        alias : {
            "@src": path.resolve(__dirname, 'src'),
            "@components": path.resolve(__dirname, 'src/components'),
            "@pages": path.resolve(__dirname, 'src/pages'),
            "@config": path.resolve(__dirname, 'src/config.js'),
            "@utils": path.resolve(__dirname, 'src/utils'),
            "@hooks": path.resolve(__dirname, 'src/hooks'),
            "@styles": path.resolve(__dirname, 'src/styles'),
            "@fonts": path.resolve(__dirname, 'src/fonts')
        },
    },
};