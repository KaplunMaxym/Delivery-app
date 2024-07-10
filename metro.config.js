const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
	const defaultConfig = await getDefaultConfig(__dirname);

	return {
		...defaultConfig,
		resolver: {
			...defaultConfig.resolver,
			extraNodeModules: {
				...defaultConfig.resolver.extraNodeModules,
				'@/': './app/',
			},
		},
	};
})();
