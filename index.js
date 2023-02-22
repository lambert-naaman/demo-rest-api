const express = require('express');
const app = express();
const mongoose = require('mongoose');
const localhost = "127.0.0.1";

//initialize and verify mongodb connection
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://${localhost}:27017/subscribers`, {
  useNewUrlParser: true, useUnifiedTopology: true

}).then(()=> console.log('database connected 👍😄 while playing'))
  .catch(err => console.error('err', err));
  
  //listen for a dbase open event
  const db = mongoose.connection
  db.once('open', ()=> console.log('database open'))

  //tell server to use json data
  app.use(express.json())

  //set all our subscriber routes
  const subscriberRouter = require("./routes/subscribers")

  //handle get requests
  app.use('/subscribers', subscriberRouter)
app.listen(3000, ()=>{
  console.log('server listening on localhost: port 3000')
});

