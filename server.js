//install packages and setup dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//setup environmental variable
const PORT  = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    useFindAndModify: false
    }
);


//routes used for CRUD execution
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)


app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}..`);
})

