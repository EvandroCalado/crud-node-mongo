const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const blogRouter = require('./src/routes/BlogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Connected to MongoDB');
    }
  }
);

app.use(express.json());
app.use('/api/blogs', blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
