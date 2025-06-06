import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/**'
			}
		]
	},
	// Exclude studio-blog directory from Next.js build
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias
		};
		return config;
	},
	// Ignore studio-blog during build
	experimental: {
		outputFileTracingIgnores: ['**/studio-blog/**']
	}
};

export default nextConfig;
