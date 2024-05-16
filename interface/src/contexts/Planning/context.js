import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
const PlanningContext = createContext({
    employees: Array,
    addEmployee: async () => {},
    updateEmployee: async () => {},
    deleteEmployee: async () => {},
})
export function PlanningContextProvider({ children }) {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        const getAllPlanning = async () => {
            try {
                const res = await axios.get('http://localhost:8089/api/employees')
                setEmployees(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getAllPlanning()
    }, [])
    const addEmployee = async (employee) => {
        try{
            const res = await axios.post('http://localhost:8089/api/add/employees', employee)
            setEmployees((prevEmployees)=> [...prevEmployees, res.data])
        }catch(err){
            console.log(err)
        }
    }
    const updateEmployee = async (id, updatedEmployee)=>{
        try{
            const res = await axios.put(`http://localhost:8089/api/employees/${id}`, updatedEmployee)
            setEmployees((prevEmployees)=>{
                prevEmployees.map((emp)=>(emp.idEmploye === id ? updatedEmployee : emp))
            })
        }catch(err){
            console.log(err)
        }
    }
    const deleteEmployee = async (id) => {
        try{
            const res = axios.delete(`http://localhost:8089/api/employees/${id}`)
            setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.idEmploye !== id))
        }catch(err){
            console.log(err)
        }
    }
    return (
        <PlanningContext.Provider
            value={{
                employees: employees,
                addEmployee: addEmployee,
                updateEmployee: updateEmployee,
                deleteEmployee: deleteEmployee,
            }}
        >
            {children}
        </PlanningContext.Provider>
    )
}

export const usePlanning = () => useContext(PlanningContext)
