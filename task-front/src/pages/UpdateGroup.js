import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const GroupPage = ({ match, history }) => {

    let noteId = match.params.id
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(` http://127.0.0.1:8000/api/groups/${noteId}/`) 
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
      fetch (` http://127.0.0.1:8000/api/groups/${noteId}/update/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(note)
      })
    }

    let handleSubmit = () => {
      updateNote()
      history.push('/')
    }

    let deleteNote = async () => {
      fetch(`http://127.0.0.1:8000/api/groups/${noteId}/update`, {
          method: 'DELETE',
          'headers': {
              'Content-Type': 'application/json'
          }
      })
      history.push('/groups')
    }

    let handleDelete = () => {
      deleteNote()
      history.push('/groups')
    }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <button className='edit' onClick={handleSubmit}>Submit</button>
            <button className='delete' onClick={handleDelete}>Delete</button>
        </h3>
      </div>
      <div className='put'>
        <input className='in-1' onChange={(e) => {setNote({...note, 'name':e.target.value})}} defaultValue={note?.name}></input>
        <input onChange={(e) => {setNote({...note, 'description':e.target.value})}} defaultValue={note?.description}></input>
      </div>
    </div>
  )
}

export default GroupPage