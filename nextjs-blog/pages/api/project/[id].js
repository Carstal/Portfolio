//CLientPromise Mongo
const { MongoClient, ObjectId } = require("mongodb");

const mongouri =
"mongodb+srv://carstaltari:Pablo__545@iot2-carlo.ijsiznf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(mongouri);

async function getProjectById(id){
    //const intId = parseInt(id);
    const objId = new ObjectId(id);
    console.log(objId);
    const result = await client
    .db("Portfolio")
    .collection("Projects")
    .findOne({_id: objId});
    if (result) {
    console.log("Returning listing from db");
    console.log(result);

    return result;
    }
    else {
    console.log("No listing received");

    return {error:"Failed to retrieve project"};
    }
}

export default async function handler(req,res){
    console.log(req);
    const { id } = req.query;
    console.log("------ID FROM REQUEST---------");
    console.log({ id });
    const project_id = { id }.id;

    console.log("------ID FROM .id---------");
    console.log(project_id);
    const idstring = ''+id+'';
    const project = await getProjectById(idstring);
    //const project = await getProjectById(project_id);

    res.status(200).json(project);
}