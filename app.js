// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const encoder = encodeURIComponent("Abcxyz@123");
// const mongoUrl = `mongodb+srv://manii9199:${encoder}@maniicodes.26jttlb.mongodb.net/longToShort?appName=maniiCodes`;
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// // app.set('views', 'views');

// const urlRoutes = require('./router/shortRouter');
// app.use(urlRoutes);

// const PORT = 3001;
// mongoose.connect(mongoUrl).then (() =>{
//     console.log("Mongo Conneccted");
//     app.listen(PORT, () => {
//         console.log(`Server Running at http://localhost:${PORT}`)
//     });
// });

require('dotenv').config();

const express = require('express');
const connectDB = require('./connectMongo');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const urlRoutes = require('./router/shortRouter');
app.use(urlRoutes);

const PORT = process.env.PORT || 3001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });