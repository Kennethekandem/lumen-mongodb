const express = require('express');
const app = express();
require('dotenv').config()



const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening to change on port ${port}`))
