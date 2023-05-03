
const express = require("express");
const app = express();
const port = 3001;
const db = require("./models")
const cors = require('cors');

app.use(express.json());
app.use(cors());


db.sequelize.sync().then(() =>{
    app.listen(port, ()=>{
        console.log("server running on port " +  port)
    })
})
