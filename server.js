const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Welcome to Agile Team Collaboration Tool API');
});

// 404 Not Found handler
app.use((req, res) => {
  console.error(`404 Not Found: ${req.originalUrl}`);
  res.status(404).json({ error: '404 Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});