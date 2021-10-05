import React, { useState, useEffect } from 'react';
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
  useEffect(()=> {
    const notesData = JSON.parse(localStorage.getItem('notes'))
    if(notesData) {
      setNotes(notesData)
    }
  },[])

  useEffect(()=> {
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])

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



const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('');

useEffect(()=> {
  console.log('This should only run once!')
}, [])

    useEffect(()=> {
     console.log('useEffect ran')
     document.title = count
    }, [count])

    return (
      <div>
        <p>The current {text || 'count'} is {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase by 1</button>
        <button onClick={() => setCount(props.count)}>Reset </button>
        <button onClick={() => setCount(count - 1)}>Decrease by 1</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    )
  }
reportWebVitals();


ReactDOM.render(
  <NoteApp />,
  document.getElementById('root')
);


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
