// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    ...eslintPluginAstro.configs.all,
    eslintPluginPrettierRecommended,
    {
        // fixes <script> linting rules inside .astro files
        // https://github.com/withastro/prettier-plugin-astro/issues/407
        files: ["**/*.astro/*.ts"],
        rules: {
            "prettier/prettier": "off",
        },
    },
    {
        rules: {
            "@typescript-eslint/no-empty-object-type": "off",
        },
    },
    {
        // fixes issues with easy-bem usage
        rules: {
            "astro/no-unused-css-selector": "off",
        },
    },
);
