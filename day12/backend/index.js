const express = require('express')
const app = express()
const mongoose = require('mongoose');
const PORT = 3006

//middleware : used to parse the data in json format
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/nietNoida');
//const Student = mongoose.model('class', { name: String });
const Student = mongoose.model('student', {
     name: String,
     grade : String,
     //grade :{type :String, required : true},        //if the grade is not visible then this will give error as we have defined grade as required
    marks : Number
    });


// const abcd = new Student({ name: 'Sneha' });             //here nietNoida is database, class is collection and sneha as a student and the class would automatically change to classes
// abcd.save().then(() => console.log('student added'));

app.get("/students",(req,res)=>{
    Student.find()
        .then(data=>res.send(data))
})

//async await will tell the front end that what is the error
app.post("/students",async(req,res)=>{
    const ss = new Student(req.body)        
     await ss.save()
        .then(data=>res.send(data))
})

app.get("/",(req,res)=>{           
    res.send("Index page")
})

app.get("/contact",(req,res)=>{
    res.send("Contact page")
})

app.listen(PORT,()=>{
    console.log("app is running")
})