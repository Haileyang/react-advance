import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: 'Hannah',
    title: 'FE',
    mentor: {
      name: 'Bob',
      title: 'BE',
    },
  });
  return (
    <div>
      <h1>
        {person.name}'s title is {person.title}
      </h1>
      <p>
        {person.name}'s mentor's name is {person.mentor.name} and his title is ({person.mentor.title})
      </p>
      <button
        onClick={() => {
            const name = prompt(`what's your mentor's name?`);
            setPerson(person => ({
                ...person, 
                mentor: {...person.mentor, name : name},
            }))
        }}
      >
        Change Mentor name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson(person => ({
            ...person, 
            mentor: {...person.mentor, title},
        }))
        }}
      >
        Change Mentor title
      </button>
    </div>
  );
}
