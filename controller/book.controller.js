const { Book } = require("../model/book.model.js")


const handleBookStoreController = async (req, res) => {
    try {
        const body = req.body;

        //check for input
        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All field required", Success: false })
        }

        //if data correct it commuicae with db

        const bookAdd = await Book.insertOne(body);
        if (bookAdd) {
            return res.status(201).json({ Message: "Data successfully inserted", Success: true, Id: bookAdd?._id })
        }

    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
};

const handleBookListController = async (req, res) => {
    try {
        const bookList = await Book.find({});
        return res.status(201).json({ Message: "Data fetched", Success: true, TotalCount: bookList.length, bookList: bookList })
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
}

const handleDeleteController = async (req, res) => {
    const body = req.body;
    try {
        const deleted = await Book.deleteOne({ _id: body.Id })
        console.log('deleted', deleted);
        if (deleted.acknowledged) {
            return res.status(201).json({ Message: "Data deleted successfully", Success: true });
        }
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
}

const handlebookUpdateController= async(req,res)=>{
    try {
        const body=req.body;
        const updating = await Book.updateOne({_id:body?.Id},{$set:body});
         if (updating.acknowledged) {
            return res.status(201).json({ Message: "Data updated successfully", Success: true });
        }
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
}

module.exports = { handleBookStoreController, handleBookListController, handleDeleteController, handlebookUpdateController }