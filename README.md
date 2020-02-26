# React, Bulma, Webpack Boilerplate for Development
> Boilerplate for web development using Node (express) server for React + Webpack 4 + scss modules + Bulma app (without create react app)

You can use this to create your own Bulma theme. The Webpack configuration and `scss` file is based on the [Bulma documentation](https://bulma.io/documentation/customize/) for customization.

## Requirements
- Node.js and `npm`

If you don't have these installed on your computer, you can use a package manager like `yum` or `brew` to install. More information can be found on the official [Node website](Node).

Alternatively, you can use a container technology like [docker](https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093) to develop in Node.js.

## Folder structure
- Source files (including custom css): `client/`
- Transpiled files:`public/`

## Development

- From the root folder install the project dependencies:
```sh
npm install
```

- Start up the `Node.js` Express server for development (uses [nodemon](https://nodemon.io/)):
```sh
npm run dev:start
```

- Build the Javascript file using webpack while watching for changes in source files:
```sh
npm run dev:build
```

You can head over to `localhost:3000` on your favorite web browser and you should see:
![Screenshot](https://github.com/manuelag19/node-react-bulma-webpack-boilerplate/blob/master/example.png)

## Reference
Official Docs
- [React](https://reactjs.org/docs/react-api.html)
- [Bulma](https://bulma.io/documentation/)
- [Webpack](https://webpack.js.org/configuration/)
- [Express](https://expressjs.com/) 