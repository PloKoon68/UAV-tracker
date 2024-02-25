const express = require("express");
const cors = require("cors")


const app = express();
app.use(cors())
app.use(express.json())


app.post("/submit", (req, res) => {
        console.log(req.body)
        res.send(req.body)
})
/*
app.get("/api", (req, res) => {
    return res.json({message: "This is from backend."})
})    
*/
app.listen(4000, () => {
    console.log("Listening 4000");
})