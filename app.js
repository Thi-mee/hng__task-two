const express = require('express');
const connectToDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const personRouter = require('./routes/personRoutes');

app.use('/api', personRouter);

connectToDB();
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



