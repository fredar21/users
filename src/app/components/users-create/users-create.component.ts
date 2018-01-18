import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

//interface
import { User } from '../../interfaces/user.interface';

//Services

import { DataUsersService } from '../../services/data-users.service';


@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

	 closeResult: string;
	 user:User={
	 	name:"",
	 	email:"",
	 	nickname:"",
	 	date:""
	 }

  constructor(private modalService: NgbModal, private dataUser: DataUsersService) { }

  ngOnInit() {
  }

  registerUser(){
  	console.log(this.user);
  	this.dataUser.addUser(this.user).subscribe(data=>{})
  }

   //Modal Window
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    })
    .catch((reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
