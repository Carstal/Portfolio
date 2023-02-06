//CLientPromise Mongo
const { MongoClient } = require("mongodb");

const mongouri =
"mongodb+srv://carstaltari:Pablo__545@iot2-carlo.ijsiznf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(mongouri);

async function getProjectById(id){
    const intId = parseInt(id)
    const result = await client
    .db("Portfolio")
    .collection("Project")
    .findOne({project_id: intId});
    if (result) {
    // console.log("Returning all listings in db");
    // console.log(result);

    return result;
    }
    else {
    // console.log("No listing received");

    return {error:"Failed to retrieve project"};
    }
}

export default async function handler(req,res){
    const { id } = req.query;
    const project_id = { id }.id;
    const project = await getProjectById(project_id);

    res.status(200).json(project);
}