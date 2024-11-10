import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	{
		ignores: ["node_modules/**", "dist/**", "lib/**", "out/**"]
	},
	{ files: ["**/*.{js, mjs, cjs, ts, mts, cts}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			/*"@typescript-eslint/no-var-requires": "warn",*/
			"@typescript-eslint/no-unused-vars": "warn"
		}
	}
];
