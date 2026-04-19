import { User } from "../models/user.model.js";

// addBook
const addBook = async(req, res) => {

    const {name, authName, pages, price, bookCount} = req.body
    const bookData = await User.create({
        name,
        authName, 
        pages, 
        price, 
        bookCount
    })

    return res.status(200).json({
        message: "Book is Added",
        data: bookData
    })
}


// updateBook
const updateBook = async(req, res) => {
    try {
        const {name, authName, pages, price, bookCount} = req.body
        
        const updatedata = await User.findOne({name: name})

        if(!updatedata) return res.status(404).json({message: "Book Name not found"})

        updatedata.authName = authName;
        updatedata.pages = pages;
        updatedata.price = price;
        updatedata.bookCount = bookCount;
        await updatedata.save()
    
        res.status(200).json({
            message: "book details update successfully",
            data: updatedata
        })
    } catch (error) {
        console.log(error, "Problem in update")
    }
}

// deleteBook
const deleteBook = async(req, res) => {
    try {
        const {name} = req.body
        console.log(name)
        // const deletebook = await User.findOne({name: name})

        const deletebook = await User.findOneAndDelete({ name: name });
        if(!deletebook) return res.status(404).json({message: "Book Name not found"})

        // await User.deleteOne({name: name})

        res.status(200).json({
            message: "Book entry deleted successfully",
        })

    } catch (error) {
        console.log(error, "Problem in delete")
    }
}

// listAllBook
const listAllBook = async(req, res) => {
    try {
        const showall = await User.find({})
        console.log(showall)

        res.status(200).json({
            message: "Successlly find the list",
            data: showall
        })

    } catch (error) {
        console.log(error)
    }
}

    

export { addBook, updateBook, deleteBook, listAllBook}