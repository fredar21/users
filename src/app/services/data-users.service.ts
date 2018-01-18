import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'

//Interface
import { User } from '../interfaces/user.interface';

@Injectable()
export class DataUsersService {

	firebaseUser:string = "https://usuarios-ef4ad.firebaseio.com/users.json";

  constructor(private http:Http) { }

  addUser(user:User){

  	let body= JSON.stringify(user);
  	let header = new Headers({
  		'Content-Type':'aplication-json'
  	});

  	return this.http.post( this.firebaseUser, body ).map(res=>{
  		console.log(res.json());
  		return res.json();
  	})

  }

  getUsers(){
  	return this.http.get( this.firebaseUser ).map(res=>res.json());
  }

  }
