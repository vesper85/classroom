const express = require('express');
const coursesModel = require('../models/coursesModel');
const  router  = express.Router();



// Route 1 Adding a new course using PUT "/api/course/addcourse"          -login required // middleware for authentication
router.post('/addcourse',async (req,res)=>{
    const {title, author} = req.body;
    try {
        // create and save model in database
        let course = await coursesModel.create({
          title: title,
          author: author,
          users:null
        });
        console.log(course);
        res.json(course)
    } catch (err) {
     console.error(err.message)   
    }
})


// Route 2 get all course of a specified user using GET "/api/course/fetchallcourses"  -login required
router.get('/fetchallcourses', async(req,res)=>{
  // using JWT for getting the userid of the user
  // then fetch the user from db
  // then get the courses array from the user document

})


module.exports = router