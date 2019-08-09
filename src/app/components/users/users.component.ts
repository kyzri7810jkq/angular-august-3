import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{

  showloading = true
  clicked = false
  dataHolder: Object

  constructor(private users: UsersService) { }

  getAllUsers(){
    this.clicked = true
    this.users.getUsers().subscribe(data => {
      console.log(data)
      this.showloading = false
      this.dataHolder = data
    });
  }

}
