import React, { createContext, useState, useContext } from "react"
const EmployeeContext = React.createContext({
    prenom: '',
    nom: '',
    role: '',
    date: new Date,
    heureDebut: '00:00:00',
    heureFin: '00:00:00',
    repos: false,
    heureDebutPause: '00:00:00',
    heureFinPause: '00:00:00',
    nbHeures: 8,
    nomJour:'Lundi',
    setEmployee: (prenom, nom, role, date, nomJour, heureDebut, heureFin, repos, heureDebutPause, heureFinPause, nbHeures)=>{},
    getEmployee: ()=>{},

})
export default function EmployeeContextProvider({children}){
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [role, setRole] = useState('')
    const [date, setDate] = useState(new Date)
    const [heureDebut, setHeureDebut] = useState('00:00:00')
    const [heureFin, setHeureFin] = useState('00:00:00')
    const [repos, setRepos] = useState(false)
    const [heureDebutPause, setHeureDebutPause] = useState('00:00:00')
    const [heureFinPause, setHeureFinPause] = useState('00:00:00')
    const [nbHeures, setNbHeures] = useState(8)
    const [nomJour, setNomJour] = useState('Lundi')
    const setEmployee = (prenom, nom, role, date, nomJour, heureDebut, heureFin, repos, heureDebutPause, heureFinPause, nbHeures)=>{

    }
    const getEmployee = ()=>{}
    return(
        <EmployeeContext.Provider value={{
            prenom: prenom,
            nom: nom,
            role: role,
            date: date,
            heureDebut: heureDebut,
            heureFin: heureFin,
            repos: repos,
            heureDebutPause: heureDebutPause,
            heureFinPause: heureFinPause,
            nbHeures: nbHeures,
            nomJour: nomJour,
            setEmployee: setEmployee,
            getEmployee: getEmployee
        }}>
            {children}
        </EmployeeContext.Provider>
    )
}

export const useEmployee = () => {
    useContext(EmployeeContext)
}