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

### Routes 

    ### /u/:id (GET)
    
    Responses :
    
        1 - 400 :
           a) Generated URL does not working! : When short URL does not work;

        2 - Sucessfull :
           a) Redirected to Original URL and add 1 visitation on it.

    ### /api/create (POST)
    
    Request Body: { url : 'http://www.google.com' }
    
    Responses :
    
        1 - 400 :
           a) URL is Required : When frontend does not send the URL;
           b) Http://" before link is required : When URL is not padronized as : 'http://(domain)'
           c) URL does not exists: When URL does not exists

        2 - 200 :
           a) Created with Sucessfull
           
    ### /api/top5?total=5 (GET)
    
    Request Query: ?total
    
    Responses :
    
        1 - 400 :
           a) Query is required: When does not send query params in URL

        2 - 200 :
           a) Get Top 5 shorted URLs by hits number
           
           
    ### /api/hits (GET)
    
    Responses :
    
        1 - 200 :
           a) Return Total Hits


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


