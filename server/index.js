const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParse = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Connection with MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  // Def. Routes
  const postRoutes = require('./routes/posts');
  app.use('/api/posts', postRoutes);

  app.get('/',(req, res) => {
    res.send('Welcome to the Personal-Blog API');
  });

  // Starting a server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  
