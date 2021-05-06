const express = require('express');
const app = express();
const cors = require("cors");
const uploadRoutes = require("./routes/api/uploads");
//const dotenv = require('dotenv');

app.use("*", cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).send({ success: true })
});

app.use(uploadRoutes);

const PORT = process.env.PORT || 8001;

app.listen(
  PORT,'0.0.0.0',
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));