import 'dotenv/config'      //feedback
import express from 'express'
import connectDb from './db/index.js'
import Router from './routes/user.routes.js'


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.json({
        message: "HOME page"
    })
})
app.use("/books", Router)

//input lena h book ka
//add krske
//delete krske
//update krske
//search kr ske
//list of all books dekh ske


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