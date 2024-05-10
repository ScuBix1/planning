import React, { createContext, useState, useContext } from 'react';
const EmployeeContext = createContext({
  prenom: '',
  nom: '',
  heureSemaine: 35,
  couleur: '#ffffff',
  idRole: '1',
  heureEffectuees: 0,
  setEmployee: (
    prenom,
    nom,
    role,
    date,
    nomJour,
    heureDebut,
    heureFin,
    repos,
    heureDebutPause,
    heureFinPause,
    nbHeures
  ) => {
    return Promise.all;
  },
  getEmployee: () => {
    return Promise.all;
  },
});
export default function EmployeeContextProvider({ children }) {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [heuresSemaine, setHeuresSemaine] = useState(35);
  const [idRole, setIdRole] = useState(1);
  const [heuresEffectuees, setHeuresEffectuees] = useState(0);
  const setEmployee = async (
    prenom,
    nom,
    heuresSemaine,
    idRole,
    heuresEffectuees
  ) => {
    const url = 'http://localhost:3000/api/employees';
    const body = JSON.stringify({
      prenom,
      nom,
      heuresSemaine,
      idRole,
      heuresEffectuees,
    });
    const headers = { 'Content-Type': 'application/json' };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.message ||
            "Quelque chose s'est mal passé lors de la création de l'employé"
        );
      }
      alert('Employé créé avec succès!');
    } catch (error) {
      console.error("Erreur lors de la création de l'employé:", error);
    }
  };
  const getEmployee = async () => {
    const url = 'http://localhost:3000/api/employees';
    const body = JSON.stringify({
      prenom,
      nom,
      heuresSemaine,
      idRole,
      heuresEffectuees,
    });
    const headers = { 'Content-Type': 'application/json' };

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
        body: body,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.message ||
            "Quelque chose s'est mal passé lors de la création de l'employé"
        );
      }
      alert('Employé créé avec succès!');
    } catch (error) {
      console.error("Erreur lors de la création de l'employé:", error);
    }
  };
  return (
    <EmployeeContext.Provider
      value={{
        prenom: prenom,
        nom: nom,
        heuresSemaine: heuresSemaine,
        idRole: idRole,
        heuresEffectuees: heuresEffectuees,
        setPrenom: setPrenom,
        setNom: setNom,
        setHeuresSemaine: setHeuresSemaine,
        setIdRole: setIdRole,
        setHeuresEffectuees: setHeuresEffectuees,
        setEmployee: setEmployee,
        getEmployee: getEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export const useEmployee = () => {
  useContext(EmployeeContext);
};
