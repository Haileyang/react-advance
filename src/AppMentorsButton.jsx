import React, { useReducer, useMemo } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
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
      <Button text="Change Mentor's Name" onClick={handleUpdateMentor}></Button>
      <Button text="Add Mentor" onClick={handleAddMentor}></Button>
      <Button text="Delete Mentor" onClick={handleDeleteMentor}></Button>
    </div>
  );
}

function Button({ text, onClick }) {
  console.log('Button', text, 're-rendering 😜');
    // const result = calculateSomething() //Time consuming 
    //refactoring 01 - useMemo
    const result =  useMemo(() => calculateSomething(), [])

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {text}
    </button>
  );
}

function calculateSomething(){
    for(let i=0; i< 10000; i++){
        console.log('inc')
    }
    return 10;
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
      title: 'Devops',
    },
  ],
};
