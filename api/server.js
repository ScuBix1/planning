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
app.get("/api/employees", (req, res)=>{
    const sql = 
    "SELECT e.idEmploye, e.nom, e.prenom, e.idRole, r.nomRole, e.couleur, GROUP_CONCAT(DISTINCT CASE WHEN p.nomJour = 'Lundi' THEN CONCAT(p.heureDebut, '-', p.heureDebutPause, '\n', p.heureFinPause, '-', p.heureFin) ELSE NULL END) AS Lundi,GROUP_CONCAT(DISTINCT CASE WHEN p.nomJour = 'Mardi' THEN CONCAT(p.heureDebut, '-', p.heureDebutPause, '\n', p.heureFinPause, '-', p.heureFin) ELSE NULL END) AS Mardi,GROUP_CONCAT(DISTINCT CASE WHEN p.nomJour = 'Mercredi' THEN CONCAT(p.heureDebut, '-', p.heureDebutPause, '\n', p.heureFinPause, '-', p.heureFin) ELSE NULL END) AS Mercredi,GROUP_CONCAT(DISTINCT CASE WHEN p.nomJour = 'Jeudi' THEN CONCAT(p.heureDebut, '-', p.heureDebutPause, '\n', p.heureFinPause, '-', p.heureFin) ELSE NULL END) AS Jeudi,GROUP_CONCAT(DISTINCT CASE WHEN p.nomJour = 'Vendredi' THEN CONCAT(p.heureDebut, '-', p.heureDebutPause, '\n', p.heureFinPause, '-', p.heureFin) ELSE NULL END) AS Vendredi,GROUP_CONCAT(DISTINCT CASE WHEN p.nomJour = 'Samedi' THEN CONCAT(p.heureDebut, '-', p.heureDebutPause, '\n', p.heureFinPause, '-', p.heureFin) ELSE NULL END) AS Samedi,GROUP_CONCAT(DISTINCT CASE WHEN p.nomJour = 'Dimanche' THEN CONCAT(p.heureDebut, '-', p.heureDebutPause, '\n', p.heureFinPause, '-', p.heureFin) ELSE NULL END) AS Dimanche FROM restaurant.employes e JOIN restaurant.planning p ON e.idEmploye = p.idEmploye JOIN restaurant.role r ON e.idRole = r.idRole GROUP BY e.idEmploye, e.nom, e.prenom, e.idRole;"
    database.query(sql, (err, data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})

app.listen(8089, ()=>{
    console.log("Lancé sur le port 8089")
})