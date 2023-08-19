const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const port = 9000; 
dotenv.config();

require('./models/ExcInfoModels');
require('./models/UserModels');
mongoose.connect(process.env.MONGO_URL);

//require API file
const ExcInfoAPI = require('./ExcInfoAPI');
const UserAPI = require('./UserAPI');

app.use(cors());
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use('/info', ExcInfoAPI);
app.use('/user', UserAPI);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));