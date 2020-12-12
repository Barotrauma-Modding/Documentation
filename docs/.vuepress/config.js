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

		sidebar: [
			{
				title: 'Fundamentals',
				children: [
					'/fundamentals/content-packages',
					'/fundamentals/xml-introduction',
					'/fundamentals/overriding-content',
				]
			},
			{
				title: 'Scripting Reference',
				children: [
					'/scripting/content-types',
					'/scripting/items',
				]
			},
			{
				title: 'Tutorials',
				children: [
					'tutorials/publishing-your-mod',
				]
			}
		],

		nav: [
			{text: "Home", link: "/"},
			{text: "Chat", link: "https://discord.gg/glorifiedstudios"},
			{text: "Contribute", link: "https://github.com/Barotrauma-Modding/Documentation/"}
		]
	},

	title: "Barotrauma - Modding Documentation",
	footer: "[MIT Licensed](https://github.com/Barotrauma-Modding/Documentation/blob/master/LICENSE)"
}
