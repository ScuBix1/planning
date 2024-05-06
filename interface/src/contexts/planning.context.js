const PlanningContext = React.createContext({
    prenom: '',
    nom: '',
    role: '',
    date: '01/01/2025',
    heureDebut: '00:00:00',
    heureFin: '00:00:00',
    repos: Boolean,
    heureDebutPause: '00:00:00',
    heureFinPause: '00:00:00',
    nbHeures: 8,
    nomJour:'Lundi'
})