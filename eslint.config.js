/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const notice = require("eslint-plugin-notice");

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,
        sourceType: "module",
        parserOptions: {},
        globals: {},
    },

    plugins: {
        notice,
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    files: ["**/*.ts", "**/*.js", "**/*.tsx"],

    rules: {
        "notice/notice": ["error", {
            mustMatch: `Copyright \\(c\\) [0-9]{0,4} Design:Funedikly. All rights reserved.`,

            template: `/*!
 * Copyright (c) <%= YEAR %> Design:Funedikly. All rights reserved.
 */

`,
        }],
    },
}, globalIgnores(["_tpl/*"])]);
