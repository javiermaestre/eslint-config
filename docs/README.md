# ESLint configs

This project have presets for ESLint which I use in private projects:

## Available configs

- `@javiermaestre/eslint-config/a11y` - Accessibility rules from [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme)
- `@javiermaestre/eslint-config/core` - ESLINT base config from [eslint-config-airbnb](https://github.com/airbnb/javascript)
- `@javiermaestre/eslint-config/react` - Based on React rules of `Airbnb`
- `@javiermaestre/eslint-config/react-hooks` - Based on React Hooks rules of `Airbnb`
- `@javiermaestre/eslint-config/react-typescript` - Based on [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme)

## Install

Install as a DEV dependency

```bash
yarn add --dev @javiermaestre/eslint-config
npm install --D @javiermaestre/eslint-config
```

## Extend

Extend configs creating a `.eslintrc.js` or `eslintrc.json` file on your project:

```js
// eslintrc.js
module.exports = {
  extends: [
    '@javiermaestre/eslint-config/core',
    '@javiermaestre/eslint-config/react',
    '@javiermaestre/eslint-config/react-hooks',
    '@javiermaestre/eslint-config/react-typescript'
  ]
};
```

```json
// eslintrc.json
{
  "extends": ["@javiermaestre/eslint-config/core", "@javiermaestre/eslint-config/react-typescript"]
}
```

Also, you can override and customise rules:

- Set the config properties of ESLINT, like [`env`](http://eslint.org/docs/user-guide/configuring#specifying-environments) [`parserOptions`](http://eslint.org/docs/user-guide/configuring#specifying-parser-options),
  or others as you like ([`ESLINT documentation`](http://eslint.org/docs/user-guide/configuring))
- Override specific rules for your project

## Default configs

This are configs ready to use:

- Config for JS

```js
// eslintrc.js
module.exports = {
  extends: ['@javiermaestre/eslint-config/core']
};
```

- Config for Typescript

```js
// eslintrc.js
module.exports = {
  extends: ['@javiermaestre/eslint-config/typescript']
};
```

- Config for React

```js
// eslintrc.js
module.exports = {
  extends: [
    '@javiermaestre/eslint-config/react' // React package extends from /core
  ]
};
```

- Config for React with Typescript

```js
// eslintrc.js
module.exports = {
  extends: [
    '@javiermaestre/eslint-config/react-typescript' // React Typescript package extends from /react and /core
  ]
};
```

- Config for React with Typescript and Hooks

```js
// eslintrc.js
module.exports = {
  extends: [
    '@javiermaestre/eslint-config/react-typescript', // React Typescript package with Hooks extends from /react and /core
    '@javiermaestre/eslint-config/react-hooks'
  ]
};
```

## Extra configuration

The plugin is ready to work with:

- Prettier - Adding a `.prettierrc` file
- Editorconfig - Adding a `.editorconfig` file

You can override the settings on this files

## Run linter

- For report

```bash
eslint --ext .js,.jsx .
```

- For auto fixing

```bash
eslint --ext .js,.jsx . --fix
```

## Next steps

Add support for:

```js

    // for Node.js projects
    '@javiermaestre/eslint-config/node',

    // for Angular projects
    '@javiermaestre/eslint-config/angular',

    ...
```
