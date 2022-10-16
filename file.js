import { MongoClient, ObjectId} from "mongodb"
import {uri} from "./credentials.js"
const client = new MongoClient(uri)//connect to client
const db = client.db("sample_restaurants")
const restaurantsCollection = db.collection("restaurants")
//console.log(restaurantsCollection);
const newRestaurant = {
    name: "Adi's BBQ",
    location: "Brooklyn, NY",
    cuisine: "Israeli", 
};
const results = await restaurantsCollection.insertOne(newRestaurant)
//console.log(results);


console.log(newRestaurant);