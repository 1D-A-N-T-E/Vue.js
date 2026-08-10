

import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import client from "./openai.js";


const app = express();


app.use(cors());

app.use(express.json());


app.post("/chat", async(req,res)=>{

    try {
 // Sūtam pieprasījumu OepnAI
        const response = await client.responses.create({ //AI izsaukums

            model:"gpt-5.4-mini",
            input:req.body.message,
           // max_output_tokens:16,
            //stream: false,  // Saņem atbildi pa gabaliņiem
            tools:[
                {
                    type:"file_search",
                    vector_store_ids:[
                        "vs_6a6b6a85272481918b0f06214aa51b0f"
                    ]
                }
            ]

        });

//console.dir(response, { depth: null });
        //console.log("AI:", response.output_text);//Izdrukā AI atbildi


        res.json({
            answer: response.output_text // AI atbilde (teksts)
        }); // ar return paliks atbilde serverī nevus vue aizies


    }catch (error) {
    console.error(error);

    res.status(500).json({
        answer: error.message
    });
}

});


app.listen(3000,()=>{

    console.log("Server running on port 3000");

});

/**
 * req objekts (Pieprasījums)
 * req.body          // Dati, ko lietotājs nosūtīja
req.body.message  // Ziņojums (jūsu gadījumā)
req.params        // URL parametri (piem., /chat/:id)
req.query         // URL vaicājumi (piem., ?page=1)
req.headers       // Papildinformācija (piem., pārlūka tips)
req.ip            // Lietotāja IP adrese
req.method        // Metode (GET, POST, PUT, DELETE)
req.url           // Pilns URL 
// 

res objekts (Atbilde)
javascript
res.json()        // Nosūta JSON atbildi (visbiežāk lieto)
res.send()        // Nosūta vienkāršu tekstu
res.status()      // Iestata HTTP statusa kodu
res.redirect()    // Pārsūta uz citu lapu
res.render()      // Parāda HTML lapu (ja lieto skatus)


stream: true  // Saņem atbildi pa gabaliņiem
*/