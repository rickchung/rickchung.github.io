const nextConfig = {
    webpack: (config, options) => {
        // Make Webpack to load a .md file as a string by import
        config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
        return config;
    }
};

export default nextConfig;
