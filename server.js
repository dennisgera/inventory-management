const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/inventory')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Inventory Management System');
});

// Use inventory routes
const inventoryRouter = require('./routes/inventory');
app.use('/inventory', inventoryRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});