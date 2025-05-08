

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


app.get("all-item", async (req, res)=>{
    
    const allItems = await Item.find()

    res.json(allItems)
})

// const drugs = [

//     { 
//         id: 1, 
//         name: "Amoxicillin", 
//         category: "Antibiotic", 
//         dosageMg: 500, 
//         isPrescriptionOnly: true, 
//         stock: 120, 
//         manufacturer: "Pfizer" 
//     },
   
//     { 
//         id: 2, 
//         name: "Paracetamol", 
//         category: "Analgesic", 
//         dosageMg: 1000, 
//         isPrescriptionOnly: false, 
//         stock: 200, 
//         manufacturer: "GSK" 
//     },
   
//     { 
//         id: 3, 
//         name: "Ibuprofen", 
//         category: "Analgesic", 
//         dosageMg: 400, 
//         isPrescriptionOnly: false, 
//         stock: 150, 
//         manufacturer: "Bayer" 
//     },
   
//     { 
//         id: 4, 
//         name: "Chloroquine", 
//         category: "Antimalarial", 
//         dosageMg: 250, 
//         isPrescriptionOnly: true, 
//         stock: 80, 
//         manufacturer: "Sanofi" 
//     },
   
//     { 
//         id: 5, 
//         name: "Ciprofloxacin", 
//         category: "Antibiotic", 
//         dosageMg: 500, 
//         isPrescriptionOnly: true, 
//         stock: 70, 
//         manufacturer: "Pfizer" 
//     },
   
//     { 
//         id: 6, 
//         name: "Loratadine", 
//         category: "Antihistamine", 
//         dosageMg: 10, 
//         isPrescriptionOnly: false, 
//         stock: 160, 
//         manufacturer: "Novartis" 
//     },
   
//     { 
//         id: 7, 
//         name: "Metformin", 
//         category: "Antidiabetic", 
//         dosageMg: 850, 
//         isPrescriptionOnly: true, 
//         stock: 140, 
//         manufacturer: "Teva" 
//     },
   
//     { 
//         id: 8, 
//         name: "Artemether", 
//         category: "Antimalarial", 
//         dosageMg: 20, 
//         isPrescriptionOnly: true, 
//         stock: 60, 
//         manufacturer: "Roche" 
//     },
   
//     { 
//         id: 9, 
//         name: "Aspirin", 
//         category: "Analgesic", 
//         dosageMg: 300, 
//         isPrescriptionOnly: false, 
//         stock: 180, 
//         manufacturer: "Bayer" 
//     },
   
//     { 
//         id: 10, 
//         name: "Omeprazole", 
//         category: "Antacid", 
//         dosageMg: 20, 
//         isPrescriptionOnly: true, 
//         stock: 90, 
//         manufacturer: "AstraZeneca" 
//     },
   
//     { 
//         id: 11, 
//         name: "Azithromycin", 
//         category: "Antibiotic",
//         dosageMg: 250, 
//         isPrescriptionOnly: true, 
//         stock: 50, 
//         manufacturer: "Pfizer" 
//     },
   
//     { 
//         id: 12, 
//         name: "Cetirizine", 
//         category: "Antihistamine", 
//         dosageMg: 10, 
//         isPrescriptionOnly: false, 
//         stock: 110, 
//         manufacturer: "Novartis" 
//     },
   
//     { 
//         id: 13, 
//         name: "Insulin", 
//         category: "Antidiabetic", 
//         dosageMg: 100, 
//         isPrescriptionOnly: true, 
//         stock: 30, 
//         manufacturer: "Novo Nordisk" 
//     },
   
//     { 
//         id: 14, 
//         name: "Artemisinin", 
//         category: "Antimalarial", 
//         dosageMg: 100, 
//         isPrescriptionOnly: true, 
//         stock: 50, 
//         manufacturer: "GSK" 
//     },
   
//     { 
//         id: 15, 
//         name: "Codeine", 
//         category: "Analgesic", 
//         dosageMg: 30, 
//         isPrescriptionOnly: true, 
//         stock: 20, 
//         manufacturer: "Teva" 
//     },
   
//     { 
//         id: 16, 
//         name: "Vitamin C", 
//         category: "Supplement", 
//         dosageMg: 500, 
//         isPrescriptionOnly: false, 
//         stock: 300, 
//         manufacturer: "Nature’s Bounty" 
//     },
   
//     { 
//         id: 17, 
//         name: "Ranitidine", 
//         category: "Antacid", 
//         dosageMg: 150, 
//         isPrescriptionOnly: false, 
//         stock: 90, 
//         manufacturer: "Sanofi" 
//     },
   
//     { 
//         id: 18, 
//         name: "Doxycycline", 
//         category: "Antibiotic", 
//         dosageMg: 100, 
//         isPrescriptionOnly: true, 
//         stock: 40, 
//         manufacturer: "Pfizer" 
//     },
   
//     { 
//         id: 19, 
//         name: "Tramadol", 
//         category: "Analgesic", 
//         dosageMg: 50, 
//         isPrescriptionOnly: true, 
//         stock: 45, 
//         manufacturer: "Teva" 
//     },
   
//     { 
//         id: 20, 
//         name: "Folic Acid", 
//         category: "Supplement", 
//         dosageMg: 5, 
//         isPrescriptionOnly: false, 
//         stock: 250, 
//         manufacturer: "Nature’s Bounty" 
//     }
   
//    ];

// app.get("/test-server", (resquest, response)=>{
//     response.send("Welsome to CareerEx")
// })


 //Question Nine
  /*POST /drugs/manufacturer-count
Accept a manufacturer in the body and return how many drugs are produced by that manufacturer.
Example body: { "manufacturer": "Pfizer" } */

// app.post('/drugs/manufacturer-totals', (req, res) => {
//     const { manufacturer } = req.body;

//     if(!manufacturer){
//         return res.status(400).json({
//             message: "please add a manufacturer"
//         })
//     }
  
//     const total = drugs.filter(drug => drug.manufacturer === manufacturer).length;
  
//     res.status(200).json({ 
//         message: "successful",
//         manufacturer, total });
//   });


app.get("/all-item", async (req, res) => {
    
    const allItems = await Item.find()

    res.status(200).json({
        message: "Success",
        allItems
    })
})


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

app.patch("/update-itemPerOne/:id", async(req, res)=>{

    const { id } = req.params
    const { itemName } = req.body

    const existingItem = await Item.findById(id)

    if(existingItem){
        existingItem.itemName = itemName

        await existingItem.save()

        return res.status(200).json({
            message: "Successful",
            existingItem
        })
    }else {
        res.status(404).json({
            message: "Item not Found"
        })
    }
})

app.delete("/delete-item", async (req, res)=>{
    const { id } = req.body

    const deleteItem = await Item.findByIdAndDelete(id)

    res.status(200).json({
        message: "Successful"
    })
})