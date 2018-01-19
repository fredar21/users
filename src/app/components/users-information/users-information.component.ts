import { Component, OnInit, Input } from '@angular/core';

//services
import { DataUsersService } from '../../services/data-users.service';


@Component({
  selector: 'app-users-information',
  templateUrl: './users-information.component.html',
  styleUrls: ['./users-information.component.css']
})
export class UsersInformationComponent implements OnInit {


	@Input() information;

  constructor(private firebase:DataUsersService) {
  	}

  ngOnInit() {
  }




}
