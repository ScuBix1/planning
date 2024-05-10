import React, { createContext, useState, useContext } from "react";
const PlanningContext = createContext({
    idEmploye: 1,
    date: new Date,
    heureDebut: '00:00:00',
    heureFin: '00:00:00',
    idRole: 1,
    jourOff: 1,
    heureDebutPause: '00:00:00',
    heureFinPause: '00:00:00',
    nombreHeures: 0,
    nomJour: 'Lundi',
    getAllPlannig: ()=>{}
})
