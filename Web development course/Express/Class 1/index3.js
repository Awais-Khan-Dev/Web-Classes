const express = require("express")

const app = express()

const ALL_SHORTS =  [
    {
        channelName: "Chai aur code",
        shortId: "ZS-JvWhloJc",
        title: "Chai theme install ki kya? N kitno se krwai? ☕️"
    },
    {
        channelName: "Harkirat Singh",
        shortId: "123",
        title: "How to crack GSOC"
    },
    {
        channelName: "Manu Paji",
        shortId: "456",
        title: "How animation works in frammer motion"
    },
]
// how to send data in parameters (params)
// here 123 is id
// http://localhost:3000/shorts/123

app.get("/shorts/:id", (req, res)=>{
    let videoId = req.params.id;
    if(!videoId){
        res.status(400).json({
            mssg: "Id is required"
        })
    }

    ALL_SHORTS.forEach(singleShort =>{
        if(singleShort.shortId == videoId){
            res.status(200).json({
                singleShort
        })
        }
    })

    res.status(400).json({
            error: "This id is not associated with any video"
    })

})

// how to send data in query
//http://localhost:3000/short?time=5040s
// here time is query
app.get("/short/", (req, res)=>{
    const time = req.query.time;

    if(!time){
        res.status(400).json({
            mssg: "time is required"
        })
    }
    console.log(time);
    
    res.json({
        data: ALL_SHORTS[0]
    })
})
app.listen(3000)