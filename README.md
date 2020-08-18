# TS Parcel Boilerplate

This is a minimal boilerplate using React and TypeScript along with Sass support. It's also possible to config firebase. Good for small projects and prototyping. Enjoy to use :)

In case of issues and questions, feel free to add the question in [Issues](https://github.com/witoldmetel/TS-Parcel-Boilerplate/issues) page.

# Built-in dependencies

- React + ReactDOM (16.13+)
- Typescript (3.8+)
- Parcel bundler (1.12+)
- Prettier (2.0.5) + TSLint config
- Jest (25.5+) and enzyme (3.11)
- sass (1.26)
- firebase (7.18)

# Demo Page

https://witoldmetel.github.io/TS-Parcel-Boilerplate

# Usage

Install dependencies

```
yarn
```

Run dev server on http://localhost:8080

```
yarn start
```

Remove develop's assets and cache

```
yarn clean
```

Lint code

```
yarn lint
```

Run unit tests

```
yarn test
```

Build assets for production

```
yarn build
```

Deploy page on GH-Pages

```
yarn deploy
```

if you receive this error message:

```
'gh-pages' is not recognized as an internal or external command,
operable program or batch file.
```

You need to install gh-pages globally by adding "-g":

```
npm install -g gh-pages --save-dev
```
