import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] =useState('')
  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('')
    setBody('')
  }
  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }
  return (
    <div>
      <h1>Notes</h1>
      {
        notes.map((note) => (
          <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
          </div>
        ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
      <input value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <textarea value ={body} onChange={(e) => setBody(e.target.value)} />
      <button>Add Note</button>
      </form>
    </div>
  )
}



ReactDOM.render(
  <NoteApp />,
  document.getElementById('root')
);


reportWebVitals();


/* const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('');
  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase by 1</button>
      <button onClick={() => setCount(props.count)}>Reset </button>
      <button onClick={() => setCount(count - 1)}>Decrease by 1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
} */

// const NoteApp = () => {
//   const [names, setNames] = useState([])
//   const [firstName, setFirstName] = useState('')
//   const addName = (e) => {
//     e.preventDefault()
//     setNames([
//       ...names,
//         {firstName}
//     ])
//     setFirstName('')
//   }
//   return (
//     <div>
//     <h1>First Try</h1>
//     {
//      names.map((name)=> (
//        <div key={name.firstName}>
//        <h3>Name: {name.firstName}</h3>
//        </div>
//      ))
//     }
//     <form onSubmit={addName} >
//     <input value= {firstName} onChange={(e) => setFirstName(e.target.value)}/>
//     <button>Add your name</button>
//     </form>
//     </div>
//   )
// }
