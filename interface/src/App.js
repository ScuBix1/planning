import './App.css';
import { card } from './components/atoms';

function App() {
  return (
    <div className='App'>
      <div className='flex gap-2'>
        <card.header>Employé</card.header>
        <card.header>Lundi</card.header>
        <card.header>Mardi</card.header>
        <card.header>Mercredi</card.header>
        <card.header>Jeudi</card.header>
        <card.header>Vendredi</card.header>
        <card.header>Samedi</card.header>
        <card.header>Dimanche</card.header>
      </div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Bastian Monnin</td>
            <td>Bastian Monnin</td>
            <td>Bastian Monnin</td>
            <td>Bastian Monnin</td>
            <td>Bastian Monnin</td>
            <td>Bastian Monnin</td>
            <td>Bastian Monnin</td>
            <td>Bastian Monnin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
