const express = require("express");
const app = express();
const mongoose = require("mongoose")

app.use(express.json())


const mongoUrl = "mongodb+srv://sidharth:qwertyuiop@cluster0.laaxkwc.mongodb.net/";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => { console.log("Connect to database") })
    .catch(e => console.log(e))





app.post("/post", async (req, res) => {
    console.log(req.body)

    const { data } = req.body;

    try {

        if (data == "sid") {
            res.send({ status: "ok" })
        }
        else {
            res.send({ status: "user not found" })
        }
    } catch (error) {
        res.send({ status: "error" })
    }

})
app.listen(5000, () => {
    console.log("server running")
})