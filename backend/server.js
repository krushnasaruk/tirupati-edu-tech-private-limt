const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const leadController = require('./controllers/leadController');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/api/enquire', leadController.saveLead);
app.post('/api/contact', leadController.saveContact);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
