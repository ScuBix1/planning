import { useEffect } from 'react';
import './App.css';
import { card } from './components/atoms';
import { EmployeeContextProvider, useEmployee } from './contexts';

function App() {
  const employees = useEmployee();
  console.log(employees)
  return (
    <EmployeeContextProvider>
      <div className='App'>
        <div className='grid grid-cols-9 grid-rows-auto w-[80vw] gap-2'>
          <card.headerLarge>Employé</card.headerLarge>
          <card.headerLarge>Rôle</card.headerLarge>
          <card.headerLarge>Lundi</card.headerLarge>
          <card.headerLarge>Mardi</card.headerLarge>
          <card.headerLarge>Mercredi</card.headerLarge>
          <card.headerLarge>Jeudi</card.headerLarge>
          <card.headerLarge>Vendredi</card.headerLarge>
          <card.headerLarge>Samedi</card.headerLarge>
          <card.headerLarge>Dimanche</card.headerLarge>
          <card.employeeLarge color='#e8fcc0'>
            Al-kumaim Rami
          </card.employeeLarge>
          <card.employeeLarge color='#e8fcc0'>
            Responsable restaurant
          </card.employeeLarge>
          <card.restLarge>repos</card.restLarge>
          <card.employeeLarge color='#e8fcc0'>
            8h00-12h00
            <br />
            14h00-17h00
          </card.employeeLarge>
          <card.employeeLarge color='#e8fcc0'>
            8h00-12h00
            <br />
            14h00-17h00
          </card.employeeLarge>
          <card.employeeLarge color='#e8fcc0'>
            8h00-12h00
            <br />
            14h00-17h00
          </card.employeeLarge>
          <card.employeeLarge color='#e8fcc0'>
            8h00-12h00
            <br />
            14h00-17h00
          </card.employeeLarge>
          <card.employeeLarge color='#e8fcc0'>
            8h00-12h00
            <br />
            14h00-17h00
          </card.employeeLarge>
          <card.employeeLarge color='#e8fcc0'>
            8h00-12h00
            <br />
            14h00-17h00 {employees.map((employee) => {})}
          </card.employeeLarge>
        </div>
      </div>
    </EmployeeContextProvider>
  );
}

export default App;
