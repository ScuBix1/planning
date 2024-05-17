import React from 'react'
import { Planning } from '../../contexts'
import { icon } from '.'

export const ButtonDeleteEmployee = ({ employee }) => {
    const { deleteEmployee } = Planning.usePlanning()
    const handleDelete = async () => {
        if (window.confirm("Êtes vous sûr de vouloir supprimer l'employé ainsi que ses horaires ?")) {
            await deleteEmployee(employee)
        }
    }
    return (
        <button onClick={handleDelete}>
            <icon.Trash className={'h-6'} />
        </button>
    )
}
export const ButtonUpdateEmployee = ({ employee }) => {
    const { setAction, setEmployeeSelected, findInfosEmployee } = Planning.usePlanning()
    const handleUpdateEmployee = () => {
        if (window.confirm("Voulez-vous modifier les horaires de l'employé")) {
            setAction('modification')
            setEmployeeSelected(employee)
        }
    }
    return (
        <button onClick={handleUpdateEmployee}>
            <icon.Pen className={'h-6'} />
        </button>
    )
}
