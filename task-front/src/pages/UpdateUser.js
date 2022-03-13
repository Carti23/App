import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = ({ match, history }) => {

    let noteId = match.params.id
    let [note, setNote] = useState(null)

    const getNote = async () => {
      let response = await fetch(` http://127.0.0.1:8000/api/users/${noteId}/`) 
      let data = await response.json()
      setNote(data)
  }

    useEffect(() => {
        getNote()
    }, [noteId])

    

    const updateNote = async () => {
      fetch (` http://127.0.0.1:8000/api/users/${noteId}/update/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(note)
      })
    }

    const handleSubmit = async () => {
      await updateNote();
      history.push('/users-list');
    }


  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <button className='edit' onClick={handleSubmit}>Submit</button>
        </h3>
      </div>
      <div className='put'>
        <input className='in-1' onChange={(e) => {setNote({...note, 'username':e.target.value})}} defaultValue={note?.username}></input>
        <input onChange={(e) => {setNote({...note, 'email':e.target.value})}} defaultValue={note?.email}></input>
      </div>
    </div>
  )
}

export default NotePage