const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())

const database = mysql.createConnection({
    host: "localhost",
    port: "8889",
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
app.post("/api/add/employees", (req, res)=>{
    const {nom, prenom, idRole, couleur, horaires} = req.body
    if(!nom||!prenom||!idRole||!couleur||!horaires){
        return res.status(400).json({error: "Tout les champs doivent être remplis"})
    }
    const sqlInsert = "INSERT INTO restaurant.employes (nom, prenom, idRole, couleur, horaires) VALUES (?,?,?,?,?)"
    database.query(sqlInsert, [nom, prenom, idRole, couleur, horaires],(err, result) =>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        const idEmployee = result.insertId
        const horairesValues = horaires.map(horaire => [
            idEmployee,
            horaire.nomJour,
            horaire.heureDebut,
            horaire.heureDebutPause,
            horaire.heureFinPause,
            horaire.heureFin,
        ])
        const sqlInsertPlanning = "INSERT INTO restaurant.planning(idEmploye, nomJour, heuredebut, heureDebutPause, heureFinPause, heureFin VALUES (?,?,?,?,?,?)"
        database.query(sqlInsertPlanning, [horairesValues], (err,result)=>{
            if(err){
                return res.status(500).json({error: err.message})
            }
            return res.status(201).json({message: "Employé et horaire ajouté avec succès"})
        })
    })
})
app.put("/api/employees/:id", (req, res)=>{
    const idEmployee = req.params.id
    if(!nom||!prenom||!idRole||!horaires){
        return res.status(400).json({error: "Tout les champs doivent être remplis"})
    }
    const sqlUpdateEmployee = "UPDATE restaurant.employes SET nom = ?, prenom = ?, idRole = ?, couleur = ? WHERE idEmploye = ?"
    database.query(sqlUpdateEmployee, [nom, prenom, idRole, couleur, idEmployee], (err, res)=>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        const sqlDeletePlanning = "DELETE FROM restaurant.planning WHERE idEmploye = ?"
        database.query(sqlDeletePlanning, [idEmployee], (err, result)=>{
            if(err){
                return res.status(500).json({error: err.message})
            }
            const horairesValues = horaires.map((horaire)=>[
                idEmployee,
                horaire.nomJour,
                horaire.heureDebut,
                horaire.heureDebutPause,
                horaire.heureFinPause,
                horaire.heureFin,
            ])
            const sqlInsertPlanning = "INSERT INTO restaurant.planning(idEmploye, nomJour, heureDebut, heureDebutPause, heureFinPause, heureFin) VALUES (?,?,?,?,?,?)"
            database.query(sqlInsertPlanning, [horairesValues], (err, result)=>{
                if(err){
                    return res.status(500).json({error: err.message})
                }
                return res.status(200).json({message: "Employé et horaires modifiés avec succès."})
            })
        })
    })
})
app.listen(8089, ()=>{
    console.log("Lancé sur le port 8089")
})