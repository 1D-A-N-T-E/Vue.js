import fs from "fs";
import client from "./openai.js";

async function createVectorStore() {

    console.log("Izveidojam Vector Store...");
//Izveido man jaunu dokumentu bibliotēku, iegūstam vektore id kur glabāsim musu failus 
    const vectorStore = await client.vectorStores.create({

        name: "Portfolio Knowledge"

    });

    console.log("Vector Store ID:");

    console.log(vectorStore.id);


//augšupielādē failu md
    const file = await client.files.create({

        file: fs.createReadStream("./knowledge/about.md"),

        purpose: "assistants"

    });

    console.log("File ID:");

    console.log(file.id);


//Šeit notiek sasaistīšana.
    await client.vectorStores.files.create(

        vectorStore.id,

        {

            file_id: file.id

        }

    );



    console.log("Fails pievienots Vector Store!");

}

createVectorStore();

/**Fails tiek augšupielādēts OpenAI serveros

Fails tiek sadalīts mazos gabaliņos (chunks)

Katrs gabaliņš tiek pārvērsts vektorā (ciparu virknē)

Šie vektori tiek saglabāti krātuvē ātrai meklēšanai */