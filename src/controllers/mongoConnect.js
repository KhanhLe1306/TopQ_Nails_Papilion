import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')


export async function mongotest() {
    try {
        await client.connect()
        console.log("MongoDB connected!!!")
    } catch (e) {
        console.log(e)
    }
}

export async function getAllClients() {
    try {
        await mongotest()
        return await userCollection.find().toArray()
    } catch (e) {
        console.log(e)
    }
}

export async function addClient(newUser) {
    try {
        await userCollection.insertOne(newUser)
        return
    } catch (e) {
        console.log(e)
    }
}

export async function deleteClient(deleteQuery) {
    try {
        await userCollection.deleteOne(deleteQuery)
        return
    } catch (e) {
        console.log(e)
    }
}

export let database = client.db('nailShopDB')

export let userCollection = database.collection('users')