import { Component, OnInit } from '@angular/core';
declare var Peer: any;

@Component({
  selector: 'app-momento-grupal',
  templateUrl: './momento-grupal.component.html',
  styleUrls: ['./momento-grupal.component.css']
})
export class MomentoGrupalComponent implements OnInit {  
  peer;
  user: any[] = [];
  constructor() { }

  ngOnInit() {
    this.user = this.getUser();
    this.peer = new Peer(null, {
      debug: 2
    });
  }

  getUser(){
    return JSON.parse(localStorage.getItem('grupo1'));
  }
}
