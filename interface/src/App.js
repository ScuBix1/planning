import { useEffect, useState } from 'react'
import './App.css'
import { card } from './components/atoms'
import { EmployeeContextProvider } from './contexts'
import axios from 'axios'

function App() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        const fetchPlanning = async () => {
            try {
                const res = await axios.get('http://localhost:8089/api/employees')
                setEmployees(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPlanning()
    }, [])
    console.log(employees)
    return (
        <EmployeeContextProvider>
            <div className="App">
                <div className="grid grid-cols-9 grid-rows-auto w-[80vw] gap-2">
                    <card.headerLarge>Employé</card.headerLarge>
                    <card.headerLarge>Rôle</card.headerLarge>
                    <card.headerLarge>Lundi</card.headerLarge>
                    <card.headerLarge>Mardi</card.headerLarge>
                    <card.headerLarge>Mercredi</card.headerLarge>
                    <card.headerLarge>Jeudi</card.headerLarge>
                    <card.headerLarge>Vendredi</card.headerLarge>
                    <card.headerLarge>Samedi</card.headerLarge>
                    <card.headerLarge>Dimanche</card.headerLarge>
                    {employees.map(
                        (employee) =>
                            employee.nom &&
                            employee.prenom &&
                            employee.couleur &&
                            employee.idRole && (
                                <>
                                    <card.employeeLarge color={`${employee.couleur}`} key={`employee${employee.id}`}>
                                        {`${employee.nom} ${employee.prenom}`}
                                    </card.employeeLarge>
                                    <card.employeeLarge color={`${employee.couleur}`}>
                                        {`${employee.nomRole}`}
                                    </card.employeeLarge>

                                    {employee.Lundi !== '00:00:00-00:00:00\n00:00:00-00:00:00' ? (
                                        <card.employeeLarge>{`${employee.Lundi}`}</card.employeeLarge>
                                    ) : (
                                        <card.restLarge>Repos</card.restLarge>
                                    )}
                                    {employee.Mardi !== '00:00:00-00:00:00\n00:00:00-00:00:00' ? (
                                        <card.employeeLarge>{`${employee.Mardi}`}</card.employeeLarge>
                                    ) : (
                                        <card.restLarge>Repos</card.restLarge>
                                    )}
                                    {employee.Mercredi !== '00:00:00-00:00:00\n00:00:00-00:00:00' ? (
                                        <card.employeeLarge>{`${employee.Mercredi}`}</card.employeeLarge>
                                    ) : (
                                        <card.restLarge>Repos</card.restLarge>
                                    )}
                                    {employee.Jeudi !== '00:00:00-00:00:00\n00:00:00-00:00:00' ? (
                                        <card.employeeLarge>{`${employee.Jeudi}`}</card.employeeLarge>
                                    ) : (
                                        <card.restLarge>Repos</card.restLarge>
                                    )}
                                    {employee.Vendredi !== '00:00:00-00:00:00\n00:00:00-00:00:00' ? (
                                        <card.employeeLarge>{`${employee.Vendredi}`}</card.employeeLarge>
                                    ) : (
                                        <card.restLarge>Repos</card.restLarge>
                                    )}
                                    {employee.Samedi !== '00:00:00-00:00:00\n00:00:00-00:00:00' ? (
                                        <card.employeeLarge>{`${employee.Samedi}`}</card.employeeLarge>
                                    ) : (
                                        <card.restLarge>Repos</card.restLarge>
                                    )}
                                    {employee.Dimanche !== '00:00:00-00:00:00\n00:00:00-00:00:00' ? (
                                        <card.employeeLarge>{`${employee.Dimanche}`}</card.employeeLarge>
                                    ) : (
                                        <card.restLarge>Repos</card.restLarge>
                                    )}
                                </>
                            )
                    )}
                </div>
            </div>
        </EmployeeContextProvider>
    )
}

export default App
