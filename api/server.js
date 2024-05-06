const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
})
app.get("/", (req, res)=>{
    const sql = "SELECT * FROM restaurant.employes"
    database.query(sql, (err, data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})
app.listen(8089, ()=>{
    console.log("Lancé sur le port 8089")
})