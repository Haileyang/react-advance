import React, { useReducer } from 'react';
import { useImmer } from 'use-immer';

export default function AppMentor() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdateMentor = () => {
    const prev = prompt(`whose name you'd like to change?`);
    const current = prompt(`Which name you'd like to change to?`);
    updatePerson((person) => {
        const mentor = person.mentors.find((m) => m.name === prev);
        mentor.name = current;
    })
  }

  const handleAddMentor = () => {
    const name = prompt(`What is name of new mentor?`);
    const title = prompt(`What is title of new mentor?`);
    updatePerson((person) => person.mentor.push({ name, title }))
  }

  const handleDeleteMentor = () => {
    const name = prompt(`whose you'd like delete?`);
    updatePerson((person) => {
        const index = person.mentors.findIndex(m => m.name === name);
        person.mentors.splice(index, 1)
    })
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