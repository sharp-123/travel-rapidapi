const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const hotelRouter = require('./router/hotel');
const flightRouter = require('./router/flight');
const vacationRouter = require('./router/vacation');
const carRouter = require('./router/car');
const path=require('path');

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/public',express.static(__dirname+'/public'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set('view engine', 'ejs');
//disabling cors policy
app.use(cors());
app.get("/",(req,res)=>{
  res.render('../views/index');
});
//tests
app.get('/resultpage',(req,res)=>{
  res.render('../views/searchResult');
})

app.use('/api/hotel', hotelRouter);
app.use('/api/flight', flightRouter);
app.use('/api/vacation', vacationRouter);
app.use('/api/car', carRouter);

// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

const PORT=process.env.PORT||3030;

app.listen(PORT, () => console.log('Search Engine Provider is running on port'+ PORT));

