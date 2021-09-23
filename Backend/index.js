const express = require('express');
const connectToMongo = require('./db')
const port = 5000;

const app = express();

// express listens to the port for requests
app.listen(port, ()=>{
    console.log(`The server is listening at http//:localhost:${port}`);
})

// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
// app.use(path, callback)
app.use('/api/courses', require('./routes/courses'))

connectToMongo();