const express = require('express');

const PORT = process.env.PORT || 3001;
// instantiate the server
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data for POST
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// instructs the server to make certain files readily available
// and to not gate it behind a server endpoint (for CSS and JS files)
// AKA make these files static resources, so that all of our front-end
// code can be accessed w/o having a specific server endpt. created for it
app.use(express.static('public'));

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
