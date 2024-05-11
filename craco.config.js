const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            if (env === 'development') {
                // Example: Add a custom alias
                webpackConfig.resolve.alias = {
                    ...webpackConfig.resolve.alias,
                    "@components": path.resolve(__dirname, 'src/components')
                };

                // Adding the React Refresh Plugin only in development mode
                webpackConfig.plugins.push(new ReactRefreshWebpackPlugin());
            }

            return webpackConfig;
        }
    }
};
