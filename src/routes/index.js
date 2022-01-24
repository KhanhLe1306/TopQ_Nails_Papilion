import express from "express";
import { ObjectId } from "mongodb";

import { userCollection, mongotest } from "../controllers/mongoConnect";

mongotest()

const router = express.Router()

router.get('/', async (req, res) => {
    const allClients = await userCollection.find().toArray()
    res.render('home', { allClients })
})

router.post('/', async (req, res) => {
    const newUser = { ...req.body, createdDate: new Date() }
    await userCollection.insertOne(newUser)

    res.redirect('/')
})

router.get('/:id', async (req, res) => {
    const user = await userCollection.find({ _id: ObjectId(req.params.id) }).toArray()
    res.send(user)
})

router.delete('/client/:id', async (req, res) => {

})
export default router