import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Person from './components/Person/Person';

function App(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
    .then(res => res.json())
    .then(data => setUsers(data.results))
    .catch(err => console.log("Error :", err))
  }, [])
  const [members, setMembers] = useState([]);
  const addPerson = (name) => {
    const totalMembers = [...members, name];
    setMembers(totalMembers)
  }
  return (
    <div className="App">
      <h2>Our Team Members: </h2>
      <div>
          {
            members.map( (member, idx) => <li key={idx}>{member.name.first + " " + member.name.last}</li>)
          }
      </div>
      <div>
        {
          users.map( user => <Person key={user.cell} addPerson={addPerson} user={user}></Person>)
        }
      </div>
    </div>
  );
}

export default App;
