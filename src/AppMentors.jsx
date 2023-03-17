import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdateMentor = () => {
    const prev = prompt(`whose name you'd like to change?`);
    const current = prompt(`Which name you'd like to change to?`);
    dispatch({type: 'updated', prev, current})
  }

  const handleAddMentor = () => {
    const name = prompt(`What is name of new mentor?`);
    const title = prompt(`What is title of new mentor?`);
    dispatch({type: 'added', name, title})
  }

  const handleDeleteMentor = () => {
    const name = prompt(`whose you'd like delete?`);
    dispatch({type: 'deleted', name})
  }

  return (
    <div>
      <h1>
        {person.name}is {person.title}
      </h1>
      <p>{person.name}'s mentor:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleUpdateMentor}
      >
        Change Mentor Name
      </button>
      <button
        onClick={handleAddMentor}
      >
        Add Mentor 
      </button>
      <button
        onClick={handleDeleteMentor}
      >
        Delete Mentor Name
      </button>
    </div>
  );
}

const initialPerson = {
  name: 'Hannah',
  title: 'FE',
  mentors: [
    {
      name: 'Bob',
      title: 'BE',
    },
    {
      name: 'James',
      title: 'DevOps',
    },
  ],
}