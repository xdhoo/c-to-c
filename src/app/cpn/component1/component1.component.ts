import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  user;
  constructor(private userSer:ServiceService) { }

  ngOnInit() {
    this.userSer.cast.subscribe(value =>{this.user = value;console.log(value)}
    )
  }
  edit(){
    this.userSer.EditUser(this.user);
  }
}
