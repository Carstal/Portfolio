//CLientPromise Mongo
const { MongoClient } = require("mongodb");

const mongouri = process.env.DBHOST_LINK;

const client = new MongoClient(mongouri);

async function getAllProjects(){
    const results = await client
    .db("Portfolio")
    .collection("Projects")
    .find({}).toArray();
    if (results) {
    // console.log("Returning all listings in db");
    // console.log(results);

    return results;
    }
    else {
    // console.log("No listings received");

    return {error:"Failed to retrieve any projects"};
    }
}

export default async function handler(req,res){
    const allProjects = await getAllProjects();

    res.status(200).json(allProjects);
}