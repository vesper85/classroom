const connectToMongo = require('./db')
const express = require('express');
const port = 5000;

connectToMongo();
const app = express();

app.use(express.json())


// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
// app.use(path, callback)
app.use('/api/course', require('./routes/courses'))

// express listens to the port for requests
app.listen(port, ()=>{
    console.log(`The server is listening at http//:localhost:${port}`);
})