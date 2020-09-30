## PS_LINX_Backend: It's backend of the Linx's Intern Challenge

### `First of all`

1 - Clone the repository using : `git clone https://github.com/Ryan-Albuquerque/PS_Linx_Backend.git`.<br />

2 - Run `npm install`to install all of dependencies.<br />

3 - In the project directory, you can run:

    ### `npm run dev`

    Runs the app in the development mode.<br />
    Open http://localhost:3333 to view it in the browser.

    The API will reload if you make edits.<br />
    You will also see any lint errors in the console.

    ### `npm run start`

    Builds the API for production<br />


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


