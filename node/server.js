const express = require('express');
const router = require('./src/routes');
const swaggerUi = require('swagger-ui-express');
const docs = require('./src/docs');
//const business = require('./src/functions/business');

const app = express();
 
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(docs.swaggerDocument));
app.use('', router);

app.listen(3001, () => console.log(`Express started at 3001`)); 



 