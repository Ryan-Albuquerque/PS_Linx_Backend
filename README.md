## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The API will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Builds the API for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### App Organization
```
app
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── vscode
│    ├── lauch.json
├── .gitignore
├── .env
├── .env-example
├── LICENSE
└── src
    ├── server.js
    ├── routes.js
    ├── controllers
    │   ├── url.controller.js
    ├── database
    │   ├── mongoose
    │       ├── index.js
    ├── middlewares
    │   ├── handlers
    │       ├── url.handlers.js
    ├── models
    │   ├── url.model.js
    ├── routes
    │   ├── api.routes.js
    │   ├── shorted.routes.js
    ├── services
        ├── url.service.js
```

### Dependencies Used
```
"axios": "^0.20.0",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"mongoose": "^5.10.6",
"valid-url": "^1.0.9"
```


