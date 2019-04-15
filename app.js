/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/

// Node Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// requiring the /fetch router module
const Router = require('./routes/fetch');

// init app
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// /fetch route
app.use('/', Router);

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started listening at', PORT);
})

/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/