import React, { memo, useReducer, useCallBack} from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    //refactoring 02 - useCallBack
    const handleUpdateMentor = useCallBack (() => {
        const prev = prompt(`whose name you'd like to change?`);
        const current = prompt(`Which name you'd like to change to?`);
        dispatch({type: 'updated', prev, current})
    }, [])

    const handleAddMentor = useCallBack (() => {
        const name = prompt(`What is name of new mentor?`);
        const title = prompt(`What is title of new mentor?`);
        dispatch({type: 'added', name, title})
    }, [])

    const handleDeleteMentor = useCallBack (() => {
        const name = prompt(`whose you'd like delete?`);
        dispatch({type: 'deleted', name})
    }, [])

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

//refactoring 03 - memo component to not only let re-render when there is different props
const Button = memo(({ text, onClick }) => {
    console.log('Button', text, 're-rendering 😜');
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
        {`${text}`}
      </button>
    );
});

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
