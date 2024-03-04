const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Model = require('./models'); 
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas

mongoose.connect('mongodb+srv://aryanpopalghat4:Mongo1234@cluster0.uvrhlj3.mongodb.net/ModelStacks?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB connection established'))
.catch(err => console.error('MongoDB connection error:', err));
app.post('/models', async (req, res) => {
  try {
    const newModel = new Model(req.body);
    await newModel.save();
    res.status(201).send(newModel);
  } catch (error) {
    console.error('Error saving model:', error);
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
app.get('/models', async (req, res) => {
    try {
      const models = await Model.find();
      res.send(models);
    } catch (error) {
      res.status(500).send(error);
    }
  });