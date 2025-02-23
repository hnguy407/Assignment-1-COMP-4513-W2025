const express = require('express');

const app = express();

const router = require('./scripts/art-api-router.js')

router.delegateRoutes(app)

let port = 8080;
app.listen(port, () => {
    console.log('Server running at port= ' + port)

})