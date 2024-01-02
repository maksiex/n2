module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'plugin:i18next/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'i18next',
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-tabs": ["error", { "allowIndentationTabs": true }],
        "import/no-unresolved": 'off',
        "no-unused-vars": 'warn',
        "react/require-default-props": 'off',
        "react/react-in-jsx-scope": 'off',
        "react/jsx-props-no-spreading": 'warn',
        "react/function-component-definition": 'off',
        "no-shadow": 'off',
        "import/extensions": 'off',
        "import/no-extraneous-dependencies": 'off',
        "no-underscore-dangle": 'off',
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/no-floating-promises": 'off',
        "@typescript-eslint/prefer-nullish-coalescing": 'off',
        "no-mixed-spaces-and-tabs": 'off',
        "react/no-deprecated": 'off',
        "@typescript-eslint/naming-convention": 'off',
        "i18next/no-literal-string": ['error', {markupOnly: true}]

    },
    globals: {
        '__IS_DEV__': true
    }
}
