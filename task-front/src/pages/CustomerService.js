import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CustomersService{
	
	constructor(){}

	updateCustomer(user){
		const url = `${API_URL}/api/users/${user.id}`;
		return axios.put(url,user);
	}
}