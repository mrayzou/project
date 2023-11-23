const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();



router.post("/add_contact",async(req, res) => {
    try {
        const { name, email, Phone } = req.body; 
        const newContact = new Contact({ name, email, Phone }); 
        await newContact.save(); 
        res.status(200).send({ msg: "Contact added", newContact });
    } catch (error) {
        res.status(400).send({ msg: "Contact not added", error }); 
    }
});

router.get("/get_contact/:_id", async (req, res) => {
    try {
       const cleanedId = req.params._id.trim();
        
        const contactToGet = await Contact.findOne({ _id: cleanedId });
        
        res.status(200).send({ msg: "contact getted", contactToGet });
    } catch (error) {
        res.status(400).send({ msg: "can not get this contact", error });
    }
});
router.delete("/delete_contact/:_id",async(req,res)=>{
    try {
        const {_id} = req.params
        await Contact.findOneAndDelete({_id})
        res.status(200).send({msg : "contact deleted"})
    } catch (error) {
        res.status(400).send({msg : "can not delete this contact",error})
        
    }
})
router.put('/update_contact/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        const updatedContact = await Contact.updateOne({_id},{$set:{...req.body}});


        res.status(200).send({ msg: 'Contact updated', updatedContact });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Internal Server Error', error });
    }
});

router.get("/get_contacts",async(req,res)=>{
try {
    const contactlist = await Contact.find()
    res.status(200).send({msg : "list",contactlist})
} catch (error) {
    res.status(400).send({msg : "can not get list",error})
}


})


module.exports = router;