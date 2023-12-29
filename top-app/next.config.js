/** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = {
    // reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            loader: "@svgr/webpack",
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plagins: [{
                        name: "preset-default",
                        params: {
                            override: {
                                removeViewBox: false
                            }
                        },
                    }],
                },
                titleProps: true,
            },
            test: /\.svg$/i,
            // use: ['@svgr/webpack,']
        });
        return config
    },
};

// nextConfig
