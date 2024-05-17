import React, { useEffect } from 'react'
import { card, button } from '../components/atoms'
import { Planning } from '../contexts'
import { ButtonUpdateEmployee } from '../components/atoms/button'

const Home = () => {
    const { employees, action, employeeSelected, setEmployeeSelected, updateEmployee } = Planning.usePlanning()
    console.log('employees=>', employeeSelected, 'action =>', action)
    return (
        <div className="App">
            {action === 'accueil' ? (
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
                                            <ButtonUpdateEmployee employee={employee} />
                                        </div>
                                    )}
                                </>
                            )
                    )}
                </div>
            ) : (
                action === 'modification' && (
                    <form method="POST">
                        <div className=" gap-2">
                            <label htmlFor="nom">Nom: </label>
                            <input type="text" name="nom" id="nom" value={employeeSelected.nom}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Prénom: </label>
                            <input type="text" name="nom" id="nom" value={employeeSelected.prenom}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">idRole: </label>
                            <input type="text" name="nom" id="nom" value={employeeSelected.idRole}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Lundi: </label>
                            <input type="text" name="nom" id="nom" className="w-full" value={`${employeeSelected.Lundi}`}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Mardi: </label>
                            <input type="text" name="nom" id="nom" className="w-full" value={`${employeeSelected.Mardi}`}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Mercredi: </label>
                            <input type="text" name="nom" id="nom" className="w-full" value={`${employeeSelected.Mercredi}`}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Jeudi: </label>
                            <input type="text" name="nom" id="nom" className="w-full" value={`${employeeSelected.Jeudi}`}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Vendrdi: </label>
                            <input type="text" name="nom" id="nom" className="w-full" value={`${employeeSelected.Vendredi}`}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Samedi: </label>
                            <input type="text" name="nom" id="nom" className="w-full" value={`${employeeSelected.Samedi}`}/>
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="nom">Dimanche: </label>
                            <input type="text" name="nom" id="nom" className="w-full" value={`${employeeSelected.Dimanche}`}/>
                        </div>
                    </form>
                )
            )}
        </div>
    )
}
export default Home
