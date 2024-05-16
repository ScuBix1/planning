import React, { useEffect } from 'react'
import { card, button } from '../components/atoms'
import { Planning } from '../contexts'

const Home = () => {
    const { employees } = Planning.usePlanning()
    console.log('employees=>', employees)
    return (
        <div className="App">
            <div className="grid grid-cols-10 grid-rows-auto w-[80vw] gap-2">
                <card.headerLarge>Employé</card.headerLarge>
                <card.headerLarge>Rôle</card.headerLarge>
                <card.headerLarge>Lundi</card.headerLarge>
                <card.headerLarge>Mardi</card.headerLarge>
                <card.headerLarge>Mercredi</card.headerLarge>
                <card.headerLarge>Jeudi</card.headerLarge>
                <card.headerLarge>Vendredi</card.headerLarge>
                <card.headerLarge>Samedi</card.headerLarge>
                <card.headerLarge>Dimanche</card.headerLarge>
                <card.headerLarge>Actions</card.headerLarge>
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
                                {employee.idEmploye !== null && (
                                    <div className="flex items-center justify-center">
                                        <button.ButtonDeleteEmployee employee={employee.idEmploye} />
                                    </div>
                                )}
                            </>
                        )
                )}
            </div>
        </div>
    )
}
export default Home
