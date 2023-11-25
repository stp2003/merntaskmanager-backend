
var url = "mongodb+srv://shashwat:shashwat_22@cluster1.uietbbo.mongodb.net/?retryWrites=true&w=majority";       // TO CHANGE TO ORIGINAL URL
const { MongoClient } = require('mongodb');
const client = new MongoClient(url);
const database = client.db("TaskTracker")

client.connect()
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

module.exports = {
    database
};