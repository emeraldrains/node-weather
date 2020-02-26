const path = require('path')
const express = require('express')
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();
// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

// setup routes; first matching route will be served
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead',
    });
})

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: `Error. Please provide an address!`,
        });
    }

    geocode(req.query.address).then((data) => {
        forecast(data).then((data) => {
            res.send(data);
        });
    });

})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term',
        });
    }
    console.log(req.query.search);
    res.send({
        products: [],
    });
});

app.get('/help/*', (req, res) => {
    res.render("404", {
        errorMessage: 'Help article not found!',
        name: 'Andrew Mead',
    });
})

// match anything that hasn't been matched so far
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found!',
        name: 'Andrew Mead',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})