// setup dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// setup port
const PORT = process.env.PORT || 3000;

// setup logging of incoming information
app.use(logger("dev"));

// parse incoming requests
app.use(express.urlencoded ({ extended:true }));
app.use(express.json());

// 
