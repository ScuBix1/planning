import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
const PlanningContext = createContext({
    employees: Array,
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

    return (
        <PlanningContext.Provider
            value={{
                employees: employees,
            }}
        >
            {children}
        </PlanningContext.Provider>
    )
}

export const usePlanning = () => useContext(PlanningContext)
