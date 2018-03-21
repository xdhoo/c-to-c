import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  user;
  constructor(private userSer:ServiceService) { }

  ngOnInit() {
    this.userSer.cast.subscribe(value =>{this.user = value;console.log(value)}
    )
  }

}
