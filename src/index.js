import dotenv from 'dotenv'
import express from 'express'
import connectDb from './db/index.js'
import Router from './routes/user.routes.js'

dotenv.config({
    path: "./.env"
})

const app = express()

app.use(express.json())
app.use("/books", Router)

//input lena h book ka
//add krske
//delete krske
//update krske
//search kr ske
//list of all books dekh ske



connectDb()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is listening at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(error)
    throw error;
})

