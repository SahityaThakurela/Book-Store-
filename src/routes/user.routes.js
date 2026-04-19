import { Router } from "express";
import { addBook, updateBook, deleteBook, listAllBook } from '../controllers/user.controllers.js'


const router = Router()

router.route("/add").post(addBook)
router.route("/delete").post(deleteBook)
router.route("/listall").get(listAllBook)
router.route("/update").post(updateBook)

export default router