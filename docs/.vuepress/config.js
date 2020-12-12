module.exports = {
	plugins: [
		[
			'vuepress-plugin-clean-urls',
			{
			  normalSuffix: '',
			  indexSuffix: '/',
			  notFoundPath: '/404.html',
			}
		],
	],

	themeConfig: {
		smoothScroll: true,

		sidebar: [],

		nav: [
			{text: "Home", link: "/"},
			{text: "Chat", link: "https://discord.gg/glorifiedstudios"},
			{text: "Contribute", link: "https://github.com/Barotrauma-Modding/Documentation/"}
		]
	},

	title: "Barotrauma - Modding Documentation",
	footer: "[MIT Licensed](https://github.com/Barotrauma-Modding/Documentation/blob/master/LICENSE)"
}
