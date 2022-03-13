import React from 'react';
import { Link} from 'react-router-dom'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  


class List extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }



    fetchData(){
        fetch('http://127.0.0.1:8000/api/users')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }


    render(){
        const empData=this.state.data;
        const rows=empData.map((emp)=>
            <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.email}</td>
                <td>{emp.stuff}</td>

                <td><input type="checkbox" id="topping" name="topping" value="Paneer" />Admin</td>
                <li className="nav__item">
                    <Link to={`/customer/${emp.id}`} className="but">
                        Edit User
                    </Link>
                </li>
            </tr>
        );
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Group</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
    
}

export default List;