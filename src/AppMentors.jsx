import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
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
        onClick={() => {
          const prev = prompt(`whose name you'd like to change?`);
          const current = prompt(`Which name you'd like to change to?`);

          setPerson(person => ({
            ...person, 
            mentors: person.mentors.map((mentor) => {
              if(mentor.name === prev){
                return {...mentor, name: current}
              }
              return mentor;
            })
          }))
        }}
      >
        Change Mentor Name
      </button>
      <button
        onClick={() => {
          const name = prompt(`What is name of new mentor?`);
          const title = prompt(`What is title of new mentor?`);

          setPerson(person => ({
            ...person, 
            mentors: [...person.mentors, {name, title}]
          }))
        }}
      >
        Add Mentor 
      </button>
      <button
        onClick={() => {
          const name = prompt(`whose you'd like delete?`);

          setPerson(person => ({
            ...person, 
            mentors: person.mentors.filter((mentor) => mentor.name !== name)
          }))
        }}
      >
        Delete Mentor Name
      </button>
    </div>
  );
}
