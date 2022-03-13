import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Router, useHistory } from 'react-router-dom'
import UserListPage from './UserListPage'


class PostGroupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
        }
    }


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
      e.preventDefault()
        await axios.post(`/api/groups-create/`, this.state)
            .then(response =>  {
            })
            .catch(error => {
            });
        this.props.history.push('/groups');
    }

  render() {
    const {userId, name, description} = this.state
    return (

      <div>
        <h1 className='h1'>Create a group</h1>
        <form>
            <div>
                <input placeholder='Name' typr='text' name='name' value={name} onChange={this.changeHandler}/>
            </div>
            <div>
                <input  placeholder='Description' typr='text' name='description' value={description} onChange={this.changeHandler}/>
            </div>
                <button className='btn-2' type='submit' onClick={this.submitHandler}>Submit</button>
        </form>
      </div>

    )
  }
}

export default PostGroupForm