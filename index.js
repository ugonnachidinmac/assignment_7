

const express = require("express")
const mongoose = require("mongoose")
const Item = require("./itemModel")

const app = express()

app.use(express.json());

const PORT = process.env.PORT || 8000



const MONGODB_URL = "mongodb+srv://ugonnachidinmac:March131990@cluster0.mimpi5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("MongoDB Connected...")
    app.listen(PORT, ()=>{
        console.log(`Server started running on ${PORT}`)
    })
})


/*Implement CRUD operations:
1. Add a found item
2. View all unclaimed items
3. View one item by ID
4. Update an item’s details or mark as claimed
5. Delete old/irrelevant entries */



// Question One

app.post("/create-item", async (req, res)=>{
    const {itemName, description, locationFound, dateFound, claimed} = req.body

    if(!itemName || !description || !locationFound || !dateFound){
        return res.status(400).json({
            message: "please enter the required fields."
        })
    }

    const newItem = new Item({itemName, description, locationFound, dateFound, claimed})
    await newItem.save()

    res.status(201).json({
        message: "successful",
        newItem
    })
})



//Question Two

app.get("/unclaimed-items", async (req, res) => {
    const unclaimedItems = await Item.find({ claimed: false });

    res.status(200).json({
        message: "Success",
        unclaimedItems
    });
});



//Question Three 

app.get("/one-item/:id", async (req, res)=>{
    const { id } = req.params
    const item = await Item.findById(id)

    if(!item){
        return res.status(404).json({message: "Item not found"})
    }

    res.status(200).json({
        message: "successful",
        item
    })
})



//Question Four 

app.put("/update-item/:id", async (req, res)=>{

    const { id } = req.params

    const {itemName, description, locationFound, dateFound, claimed} = req.body

    const updatedItem = await Item.findByIdAndUpdate(
        id,
        {itemName, description, locationFound, dateFound, claimed},
        {new: true}
    )

    res.status(201).json({
        message: "Successful",
        updatedItem
    })

})


// Question Five

app.delete("/delete-item/:id", async (req, res) => {
    const { id } = req.params;

    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
        return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({
        message: "Deleted successfully",
    });
});


