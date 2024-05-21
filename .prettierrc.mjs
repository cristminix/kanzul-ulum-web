// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	singleAttributePerLine: true,
	semi: false,
	bracketSameLine: true,
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "ignore",
	printWidth: 300,
	jsxBracketSameLine: true,
}
