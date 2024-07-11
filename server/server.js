const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./Config')
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// CORS Middleware
app.use(cors());
// Own Error Handler
app.use(errorHandler);

// connection to mongoose
mongoose.connect(mongoURI)
       .then(() => {
              console.log('Mongoose Connected');
       })
       .catch((err) => {
              console.log("error in Connection: " + err.message);
       });

app.get('/', (req, res) => {
       res.send("Welcome to AirBnb Server");
})

app.listen(PORT, () => {
       console.log(`Server listening on port ${PORT}`);
});