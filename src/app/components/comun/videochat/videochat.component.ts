import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.component.html',
  styleUrls: ['./videochat.component.css']
})
export class VideochatComponent implements OnInit {
  
  @Input() peer: any;

  @ViewChild('myvideo') myVideo: any;
  @ViewChild('otrousuario') otrousuario: any;

  anotherid;
  mypeerid;
  constructor() { }

  ngOnInit() {
  
    setTimeout(() => {
      this.mypeerid = this.peer.id;
    }, 3000);
    let video = this.myVideo.nativeElement;
    let videootrousuario = this.otrousuario.nativeElement;
    //this.peer = new Peer({key: 'lwjd5qra8257b9'});     

    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        //debugger;
        console.log(data);
      });
    });
    
    var n = <any>navigator;
    
    n.getUserMedia =  ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );
    
    this.peer.on('call', function(call) {
      debugger;
      n.getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream);
        videootrousuario.src =URL.createObjectURL(stream);
        videootrousuario.play();
        call.on('stream', function(remotestream){
          video.src = URL.createObjectURL(remotestream);
          video.play();
        })
      }, function(err) {
        console.log('Failed to get stream', err);
      })
    });
  }

  connect(){
    var conn = this.peer.connect(this.anotherid);
    debugger;
    let msg: string;
    msg = "</br> Se envio desde aqui";
    conn.on('open', function(){
      conn.send(msg);
    });
  }
  
  videoconnect(){
    let video = this.myVideo.nativeElement;
    var localvar = this.peer;
    var fname = this.anotherid;
    
    var n = <any>navigator;
    
    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
    
    n.getUserMedia({video: true, audio: true}, function(stream) {
      var call = localvar.call(fname, stream);
      call.on('stream', function(remotestream) {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      })
    }, function(err){
      console.log('Failed to get stream', err);
    })
  }
}
