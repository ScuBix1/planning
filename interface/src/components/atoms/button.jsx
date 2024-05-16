import React from "react";
import { usePlanning } from "../../contexts/Planning/context";
import { icon } from ".";

export const ButtonDeleteEmployee = ({employee}) =>{
    const { deleteEmployee } = usePlanning()
    const handleDelete = async () => {
        if(window.confirm('Êtes vous sûr de vouloir supprimer l\'employé ainsi que ses horaires ?' )){
            await deleteEmployee(employee)
        }
    }
    return(
        <button onClick={handleDelete}><icon.Trash className={'h-6'}/></button>
    )
}
