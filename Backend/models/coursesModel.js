const mongoose = require('mongoose');

const courses = new mongoose.Schema({
    classcode:{
        type:String
    },
    title: {
        type:String
    },
    author:{
        type:String
        //type:mongoose.Schema.Types.ObjectId
    },
    date:{
        type:Date,
        default:Date.now
    },
    users:{
        type:Array
    },
    assignments:{
        type:Array
    }
    
    //img:{
    //    type:Image,
    //}
})

// when we call mongoose.model on a schema it compiles a model for you
// mongoose.model('singular name your collection is for', schema , ' your collection name')
// if the collection name is not specified then it takes first argument as the collection name
// and appends "s" to it
module.exports = mongoose.model('courses',courses);