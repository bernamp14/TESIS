import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  @Input() peer: any;

  constructor() { }

  anotherid;
  mypeerid;

  ngOnInit() {
    setTimeout(() => {
      this.mypeerid = this.peer.id;
    }, 3000);

    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        //debugger;
        $("#chat").append(data);
        console.log(data);
      });
    }, {
      reliable: true
    });

  }
  
  connect(){
    var conn = this.peer.connect(this.anotherid);
    debugger;
    if  ($("#mensaje").val() != "") {
      let msg: string;
      msg = "</br>" + this.peer.id + ': ' + $("#mensaje").val();
      $("#mensaje").val("");    
      $("#chat").append(msg);
      conn.on('open', function(){
        conn.send(msg);
      });
    }
  }
}
