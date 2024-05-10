import React, { createContext, useState, useContext } from 'react';
const PlanningContext = createContext({
  idEmploye: 1,
  date: new Date(),
  heureDebut: '00:00:00',
  heureFin: '00:00:00',
  idRole: 1,
  jourOff: 1,
  heureDebutPause: '00:00:00',
  heureFinPause: '00:00:00',
  nombreHeures: 0,
  nomJour: 'Lundi',
  getAllPlannig: () => {},
});
export default function PlanninContextProvider({ children }) {
    const [idEmploye, setIdEmploye] = useState(1)
    const [date, setDate] = useState(new Date)
    const [heureDebut, setHeureDebut] = useState('00:00:00')
    const [heureFin, setHeureFin] = useState('00:00:00')
    const [idRole, setIdRole] = useState(1)
    const [jourOff, setJourOff] = useState(1)
    const [heureDebutPause, setHeureDebutPause] = useState('00:00:00')
    const [heureFinPause, setHeureFinPause] = useState('00:00:00')
    const [nombreHeures, setNombreHeures] = useState(0)
    const [nomJour, setNomJour] = useState('Lundi')
    const getAllPlanning = ()=>{

    }
    return(
        <PlanningContext.Provider value={{
            idEmploye: idEmploye,
            date: date,
            heureDebut: heureDebut,
            heureFin: heureFin,
            idRole: idRole,
            jourOff: jourOff,
            heureDebutPause: heureDebutPause,
            heureFinPause: heureFinPause,
            nombreHeures: nombreHeures,
            nomJour: nomJour,
            getAllPlannig: getAllPlanning,
        }}>
            {children}
        </PlanningContext.Provider>
    )
}
export const usePlanning = () => {
    useContext(PlanningContext);
};
