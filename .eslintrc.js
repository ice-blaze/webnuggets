// import antfu from '@antfu/eslint-config'
// const antfu = require('@antfu/eslint-config').default;
// const { FlatCompat } = require('@eslint/eslintrc')

// const compat = new FlatCompat()
/* eslint-disable sort-keys */
// export default antfu({
	// beter to use flat format
module.exports = {
	root: true,
	ignorePatterns: [`projects/**/*`],
	plugins: [`@stylistic/ts`, `@stylistic/js`, 'eslint-plugin-antfu'],
	overrides: [{
		files: [`*.ts`],
		extends: [
			`eslint:recommended`,
			`plugin:@typescript-eslint/stylistic-type-checked`,
			`plugin:@typescript-eslint/strict-type-checked`,
			`plugin:@angular-eslint/recommended`,
			`plugin:@angular-eslint/template/process-inline-templates`,
		],
	parserOptions: {
			project: ['./tsconfig.json'], // Specify it only for TypeScript files
		},
		rules: {
			/* eslint-enable sort-keys */
			"@angular-eslint/component-selector": [`error`, {
				prefix: `app`,
				style: `kebab-case`,
				type: `element`,
			}],
			"@angular-eslint/directive-selector": [`error`, {
				prefix: `app`,
				style: `camelCase`,
				type: `attribute`,
			}],
			"@stylistic/js/array-bracket-newline": [`error`, {minItems: 2}],
			"@stylistic/js/array-bracket-spacing": [`error`, `never`],
			"@stylistic/js/array-element-newline": [`error`, `always`],
			"@stylistic/js/arrow-parens": [`error`, `always`],
			"@stylistic/js/arrow-spacing": `error`,
			"@stylistic/js/block-spacing": `error`,
			"@stylistic/js/brace-style": `error`,
			"@stylistic/js/comma-dangle": [`error`, `always-multiline`],
			"@stylistic/js/comma-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/js/comma-style": [`error`, `last`],
			"@stylistic/js/computed-property-spacing": [`error`, `never`],
			"@stylistic/js/dot-location": [`error`, `object`],
			"@stylistic/js/eol-last": [`error`, `always`],
			"@stylistic/js/function-call-argument-newline": [`error`, `always`],
			"@stylistic/js/function-call-spacing": [`error`, `never`],
			"@stylistic/js/function-paren-newline": [`error`, {minItems: 2}],
			"@stylistic/js/generator-star-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/js/implicit-arrow-linebreak": [`error`, `beside`],
			"@stylistic/js/indent": [`error`, `tab`],
			"@stylistic/js/key-spacing": [`error`, {
				afterColon: true,
				beforeColon: false,
				mode: `strict`,
			}],
			"@stylistic/js/keyword-spacing": [`error`, {before: true}],
			"@stylistic/js/linebreak-style": [`error`, `unix`],
			// eslint-disable-next-line @stylistic/js/max-len
			"@stylistic/js/lines-between-class-members": [`error`, {enforce: [{
				blankLine: `always`,
				next: `method`,
				prev: `method`,
			}]}],
			"@stylistic/js/max-len": [`error`, {code: 120}],
			"@stylistic/js/max-statements-per-line": [`error`, {max: 1}],
			"@stylistic/js/multiline-ternary": [`error`, `always`],
			"@stylistic/js/new-parens": `error`,
			"@stylistic/js/newline-per-chained-call": `error`,
			"@stylistic/js/no-confusing-arrow": `error`,
			// eslint-disable-next-line @stylistic/js/max-len
			"@stylistic/js/no-extra-parens": `off`,
			"@stylistic/js/no-extra-semi": `error`,
			"@stylistic/js/no-floating-decimal": `error`,
			"@stylistic/js/no-mixed-operators": `error`,
			"@stylistic/js/no-mixed-spaces-and-tabs": `error`,
			"@stylistic/js/no-multi-spaces": `error`,
			"@stylistic/js/no-multiple-empty-lines": [`error`, {
				max: 1,
				maxEOF: 0,
			}],
			"@stylistic/js/no-tabs": [`error`, {allowIndentationTabs: true}],
			"@stylistic/js/no-trailing-spaces": `error`, // TODO single quote
			"@stylistic/js/no-whitespace-before-property": `error`,
			"@stylistic/js/nonblock-statement-body-position": [`error`, `beside`],
			"@stylistic/js/object-curly-newline": [`error`, {minProperties: 2}],
			"@stylistic/js/object-curly-spacing": [`error`, `never`],
			"@stylistic/js/object-property-newline": `error`,
			"@stylistic/js/one-var-declaration-per-line": [`error`, `initializations`],
			"@stylistic/js/operator-linebreak": [`error`, `after`],
			"@stylistic/js/padded-blocks": [`error`, `never`],
			"@stylistic/js/quote-props": [`error`, `consistent-as-needed`],
			"@stylistic/js/quotes": [`error`, `backtick`],
			"@stylistic/js/rest-spread-spacing": [`error`, `never`],
			"@stylistic/js/semi": [`error`, `never`, {beforeStatementContinuationChars: `always`}],
			"@stylistic/js/semi-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/js/semi-style": [`error`, `last`],
			"@stylistic/js/space-before-blocks": `error`,
			"@stylistic/js/space-before-function-paren": [`error`, `never`],
			"@stylistic/js/space-in-parens": [`error`, `never`],
			"@stylistic/js/space-infix-ops": `error`,
			"@stylistic/js/space-unary-ops": `error`,
			"@stylistic/js/spaced-comment": [`error`, `always`],
			"@stylistic/js/switch-colon-spacing": `error`,
			"@stylistic/js/template-curly-spacing": `error`,
			"@stylistic/js/template-tag-spacing": `error`,
			"@stylistic/js/wrap-iife": [`error`, `outside`],
			"@stylistic/js/wrap-regex": `off`,
			"@stylistic/js/yield-star-spacing": [`error`, `after`],

			"@stylistic/ts/block-spacing": `error`,
			"@stylistic/ts/brace-style": `error`,
			"@stylistic/ts/comma-dangle": [`error`, `always-multiline`],
			"@stylistic/ts/comma-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/ts/function-call-spacing": [`error`, `never`],
			"@stylistic/ts/indent": [`error`, `tab`],
			"@stylistic/ts/key-spacing": [`error`, {
				afterColon: true,
				beforeColon: false,
				mode: `strict`,
			}],
			"@stylistic/ts/keyword-spacing": [`error`, {before: true}],
			"@stylistic/ts/no-extra-parens": `off`,
			"@stylistic/ts/no-extra-semi": `error`,
			"@stylistic/ts/object-curly-spacing": [`error`, `never`],
			"@stylistic/ts/padding-line-between-statements":['error',{
				"blankLine": "always",
				"next": ["function", "return"],
				"prev": ["function", "return"],
			}], // TODO doesnt work Interesting but too complexe to setup now
			"@stylistic/ts/quotes": [`error`, `backtick`],
			"@stylistic/ts/semi": [`error`, `never`, {beforeStatementContinuationChars: `always`}],
			"@stylistic/ts/space-before-blocks": `error`,
			"@stylistic/ts/space-before-function-paren": [`error`, `never`],
			"@stylistic/ts/space-infix-ops": `error`,
			"@stylistic/ts/type-annotation-spacing": [`error`, {
				after: true,
				before: false,
			}],

			// -----
			// "@stylistic/ts/member-delimiter-style": [`error`, `none`],
			// @stylistic/js/padding-line-between-statements: // Interesting but too complexe to setup now
			// "@stylistic/ts/block-spacing": [`error`, `never`],
			// "@stylistic/ts/comma-dangle": [`error`, `always-multiline`],
			// "@stylistic/ts/comma-spacing": [`error`, { "after": true, "before": false }],
			"no-nested-ternary": `error`,
			"no-unneeded-ternary": `error`,
			"no-unused-expressions": `error`,
			"no-unused-private-class-members": `error`,
			"no-unused-vars": `error`,
			"object-shorthand": [`error`, `consistent`],
			/* eslint-disable sort-keys */

			/* eslint-disable sort-keys */
		},
	}, {
		files: [`.eslintrc.js`],
		extends:[`eslint:recommended`, `plugin:@typescript-eslint/stylistic`, `plugin:@typescript-eslint/strict`,],
		rules: {
			...rules,
			"sort-keys": `error`,
			"@stylistic/js/array-bracket-newline": [`error`, {minItems: 4}],
			"@stylistic/js/array-element-newline": [`error`, {minItems: 4}],
			
			// TODO use default rules when they match



		},
	}, {
		files: [`*.html`],
		extends: [`plugin:@angular-eslint/template/recommended`, `plugin:@angular-eslint/template/accessibility`],
		rules: {},
	}],
	env: {node: true,es6:true},
}

// TODO use strict recommended with types and then remove the double rules
var rules ={
			"@stylistic/js/array-bracket-newline": [`error`, {minItems: 2}],
			"@stylistic/js/array-bracket-spacing": [`error`, `never`],
			"@stylistic/js/array-element-newline": [`error`, `always`],
			"@stylistic/js/arrow-parens": [`error`, `always`],
			"@stylistic/js/arrow-spacing": `error`,
			"@stylistic/js/block-spacing": `error`,
			"@stylistic/js/brace-style": `error`,
			"@stylistic/js/comma-dangle": [`error`, `always-multiline`],
			"@stylistic/js/comma-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/js/comma-style": [`error`, `last`],
			"@stylistic/js/computed-property-spacing": [`error`, `never`],
			"@stylistic/js/dot-location": [`error`, `object`],
			"@stylistic/js/eol-last": [`error`, `always`],
			"@stylistic/js/function-call-argument-newline": [`error`, `always`],
			"@stylistic/js/function-call-spacing": [`error`, `never`],
			"@stylistic/js/function-paren-newline": [`error`, {minItems: 2}],
			"@stylistic/js/generator-star-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/js/implicit-arrow-linebreak": [`error`, `beside`],
			"@stylistic/js/indent": [`error`, `tab`],
			"@stylistic/js/key-spacing": [`error`, {
				afterColon: true,
				beforeColon: false,
				mode: `strict`,
			}],
			"@stylistic/js/keyword-spacing": [`error`, {before: true}],
			"@stylistic/js/linebreak-style": [`error`, `unix`],
			// eslint-disable-next-line @stylistic/js/max-len
			"@stylistic/js/lines-between-class-members": [`error`, {enforce: [{
				blankLine: `always`,
				next: `method`,
				prev: `method`,
			}]}],
			"@stylistic/js/max-len": [`error`, {code: 120}],
			"@stylistic/js/max-statements-per-line": [`error`, {max: 1}],
			"@stylistic/js/multiline-ternary": [`error`, `always`],
			"@stylistic/js/new-parens": `error`,
			"@stylistic/js/newline-per-chained-call": `error`,
			"@stylistic/js/no-confusing-arrow": `error`,
			// eslint-disable-next-line @stylistic/js/max-len
			"@stylistic/js/no-extra-parens": `off`,
			"@stylistic/js/no-extra-semi": `error`,
			"@stylistic/js/no-floating-decimal": `error`,
			"@stylistic/js/no-mixed-operators": `error`,
			"@stylistic/js/no-mixed-spaces-and-tabs": `error`,
			"@stylistic/js/no-multi-spaces": `error`,
			"@stylistic/js/no-multiple-empty-lines": [`error`, {
				max: 1,
				maxEOF: 0,
			}],
			"@stylistic/js/no-tabs": [`error`, {allowIndentationTabs: true}],
			"@stylistic/js/no-trailing-spaces": `error`, // TODO single quote
			"@stylistic/js/no-whitespace-before-property": `error`,
			"@stylistic/js/nonblock-statement-body-position": [`error`, `beside`],
			"@stylistic/js/object-curly-newline": [`error`, {minProperties: 2}],
			"@stylistic/js/object-curly-spacing": [`error`, `never`],
			"@stylistic/js/object-property-newline": `error`,
			"@stylistic/js/one-var-declaration-per-line": [`error`, `initializations`],
			"@stylistic/js/operator-linebreak": [`error`, `after`],
			"@stylistic/js/padded-blocks": [`error`, `never`],
			"@stylistic/js/quote-props": [`error`, `consistent-as-needed`],
			"@stylistic/js/quotes": [`error`, `backtick`],
			"@stylistic/js/rest-spread-spacing": [`error`, `never`],
			"@stylistic/js/semi": [`error`, `never`, {beforeStatementContinuationChars: `always`}],
			"@stylistic/js/semi-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/js/semi-style": [`error`, `last`],
			"@stylistic/js/space-before-blocks": `error`,
			"@stylistic/js/space-before-function-paren": [`error`, `never`],
			"@stylistic/js/space-in-parens": [`error`, `never`],
			"@stylistic/js/space-infix-ops": `error`,
			"@stylistic/js/space-unary-ops": `error`,
			"@stylistic/js/spaced-comment": [`error`, `always`],
			"@stylistic/js/switch-colon-spacing": `error`,
			"@stylistic/js/template-curly-spacing": `error`,
			"@stylistic/js/template-tag-spacing": `error`,
			"@stylistic/js/wrap-iife": [`error`, `outside`],
			"@stylistic/js/wrap-regex": `off`,
			"@stylistic/js/yield-star-spacing": [`error`, `after`],

			"@stylistic/ts/block-spacing": `error`,
			"@stylistic/ts/brace-style": `error`,
			"@stylistic/ts/comma-dangle": [`error`, `always-multiline`],
			"@stylistic/ts/comma-spacing": [`error`, {
				after: true,
				before: false,
			}],
			"@stylistic/ts/function-call-spacing": [`error`, `never`],
			"@stylistic/ts/indent": [`error`, `tab`],
			"@stylistic/ts/key-spacing": [`error`, {
				afterColon: true,
				beforeColon: false,
				mode: `strict`,
			}],
			"@stylistic/ts/keyword-spacing": [`error`, {before: true}],
			"@stylistic/ts/no-extra-parens": `off`,
			"@stylistic/ts/no-extra-semi": `error`,
			"@stylistic/ts/object-curly-spacing": [`error`, `never`],
			"@stylistic/ts/quotes": [`error`, `backtick`],
			"@stylistic/ts/semi": [`error`, `never`, {beforeStatementContinuationChars: `always`}],
			"@stylistic/ts/space-before-blocks": `error`,
			"@stylistic/ts/space-before-function-paren": [`error`, `never`],
			"@stylistic/ts/space-infix-ops": `error`,
			"@stylistic/ts/type-annotation-spacing": [`error`, {
				after: true,
				before: false,
			}],

			// -----
			// "@stylistic/ts/member-delimiter-style": [`error`, `none`],
			// @stylistic/js/padding-line-between-statements: // Interesting but too complexe to setup now
			// "@stylistic/ts/block-spacing": [`error`, `never`],
			// "@stylistic/ts/comma-dangle": [`error`, `always-multiline`],
			// "@stylistic/ts/comma-spacing": [`error`, { "after": true, "before": false }],
			"no-nested-ternary": `error`,
			"no-unneeded-ternary": `error`,
			"no-unused-expressions": `error`,
			"no-unused-private-class-members": `error`,
			"no-unused-vars": `error`,
			"object-shorthand": [`error`, `consistent`],
			/* eslint-disable sort-keys */
};