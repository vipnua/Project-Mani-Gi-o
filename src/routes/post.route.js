const express = require('express');
const { list } = require('../controllers/post.controller');
const route = express.Router();

route.get('/',list);

module.exports = route;