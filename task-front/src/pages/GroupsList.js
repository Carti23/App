import React from 'react';
import { Link } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  


class GroupsList extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }



    fetchData(){
        fetch('http://127.0.0.1:8000/api/groups')
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
                <td>{emp.name}</td>


                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <td><input type="checkbox" id="topping" name="topping" value="Paneer" /></td>
                <li className="nav__item">
                    <a href={'/group/' + emp.id} className="but">
                        Edit Group
                    </a>
                </li>
            </tr>
        );
        return (
            <table className="table-2 table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Data Analytics</th>
                        <th>Services Analytics</th>
                        <th>Voice Analytics</th>
                        <th>Queue Stats</th>
                        <th>Voice Stats</th>
                        <th>Video</th>
                        <th>Amart Access</th>
                        <th>Diagrams</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
    
}

export default GroupsList;