import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Router, useHistory } from 'react-router-dom'
import UserListPage from './UserListPage'


class PostUserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
        }
    }


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
      e.preventDefault()
        await axios.post(`/api/users-create/`, this.state)
            .then(response =>  {
            })
            .catch(error => {
            });
        this.props.history.push('/users-list');
    }

  render() {
    const {userId, username, email} = this.state
    return (

      <div>
        <h1 className='h1'>Create a user</h1>
        <form>
            <div>
                <input placeholder='Username' typr='text' name='username' value={username} onChange={this.changeHandler}/>
            </div>
            <div>
                <input  placeholder='Email' typr='email' name='email' value={email} onChange={this.changeHandler}/>
            </div>
                <button className='btn-2' type='submit' onClick={this.submitHandler}>Submit</button>
        </form>
      </div>

    )
  }
}

export default PostUserForm