import { Component, OnInit, Output, EventEmitter } from '@angular/core';


//services
import { DataUsersService } from '../../services/data-users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
	@Output() usuario = new EventEmitter();
	users:any[]=[];

  constructor( private dataFirebase:DataUsersService ) {

  	this.dataFirebase.getUsers().subscribe(data=>{
  
  		for(let index in data){
  			let user = data[index];  
  			user.index = index;
  			this.users.push(data[index]);		
  		}

  		console.log(this.users);
  	})

   }

  ngOnInit() {
  }

  change(i){
  	console.log("cambie y soy "+i);
  	console.log(this.users[i]);
  }

}
