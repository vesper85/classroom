const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://classroomdb_124:*****@classroomdb.bckkb.mongodb.net/test?authSource=admin&replicaSet=atlas-hjl3un-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connect to mongoDB');
    })
}

module.exports = connectToMongo;