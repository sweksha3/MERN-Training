 const express = require('express')
 const app = express()
 const mongoose=require('mongoose')
 const Book =require('./models/books')
 const PORT = 5001

 //middleware
 app.use(express.json())

 mongoose.connect("mongodb://127.0.0.1:27017/newBook")
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.error(err))


 app.get("/",(req,res)=>{
    res.send("I like books")
 })

//   app.get("/books",(req,res)=>{
//     res.send("books are very good")
//  })

 app.get("/books",async(req,res)=>{
   try{
    const books= await Book.find()
   return res.status(201).json(books)
   //  res.json(books)
   }catch(error){
      res.status(500).json({message:"failed to fetch book"})
   }
 })

 app.get('/books/:id',async (req,res)=>{
   try{
   const book = await Book.findById(req.params.id)
       //.then(d=>res.send(d))
   if (!book) return res.status(404).json({message : "book not found"})
   res.json(book)
   console.log("the book id is ",req.params.id)    //this would print the id from postman to console
   // console.log(req.body)                          //gives title author and year
   // console.log(req.body.title)
   }catch(error){
      res.status(500).json({message : "failed to fetch the book"})
   }
})

 app.post("/books",async (req,res)=>{
   const {title,author,year}=req.body
   try{
    const newBook = new Book({title,author,year})
    await newBook.save()
    res.json(newBook)
    //res.json(newBook)
   }catch(error){
      res.status(500).json({message : "failed to add book"})
   }
 })

 app.put("/books/:id",async (req,res)=>{
   const {title,author,year}=req.body
   try{
   const updatedBook=await Book.findByIdAndUpdate(req.params.id,{title,author,year},{new:true})       //new:true is uesd to update data in real time in put block

   if(!updatedBook) return res.status(404).json({message : "book not found"})
   res.json(updatedBook)
   }catch(error){
      res.status(500).json({message : "failed to update book"})
   }
 })

 app.delete('/books/:id',async(req,res)=>{
   try{
   const deleteBook =await Book.findByIdAndDelete(req.params.id)
   if(!deleteBook) return res.status(404).json({message : "book not found"})
   res.json({message:"book deleted"})
   }catch(error){
      res.status(500).json({message : "failed to update book"})
   }
 })

 app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
 })