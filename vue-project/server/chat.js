app.post("/chat", async (req,res)=>{


    const userMessage = req.body.message;


    console.log("User:", userMessage);



    const response = await client.responses.create({

        model:"gpt-5",

        input:userMessage

    });



    console.log(
        "AI:",
        response.output_text
    );



    res.json({

        answer:response.output_text

    });


});