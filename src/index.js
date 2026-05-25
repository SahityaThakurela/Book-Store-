//  this is a backend project where CRUD operations performs
//  It's the library books managment system where you can 
//  -> Add New book entry
//  -> Update it's details 
//  -> delete any specific book entry 
//  -> all show all the books in one list view 




import 'dotenv/config'      //feedback
import express from 'express'
import connectDb from './db/index.js'
import Router from './routes/user.routes.js'


const app = express()

app.use(express.json())         // kind of middleware which parse the data into json 

app.get("/", (req, res) => {    //  home page route 
    return res.json({
        message: "HOME page"
    })
})

app.use("/books", Router)       //  

//  WORK-FLOW (approch to solve)
//      input lena h book ka
//      add krske
//      delete krske
//      update krske
//      search kr ske
//      list of all books dekh ske


//connecting to db
connectDb()
    .then(() => {
        app.listen(process.env.PORT,() => {
            console.log(`App is listiening at PORT : ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
        throw error;
    })