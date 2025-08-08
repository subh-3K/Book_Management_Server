const express = require("express");

const { handleBookStoreController, handleBookListController, handleDeleteController, handlebookUpdateController } = require("../controller/book.controller.js")

const router = express.Router();

//http://localhost:8000/book/addBook
router.post("/addbook", handleBookStoreController) //post req patacchi

router.get("/booklists", handleBookListController)

router.post("/deletebook", handleDeleteController)

router.put("/updatebook", handlebookUpdateController)

module.exports = router;