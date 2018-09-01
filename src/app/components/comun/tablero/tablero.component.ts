import { Component, OnInit, ElementRef } from '@angular/core';
import * as io from 'socket.io-client';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
declare var $: any;
declare var JQuery: any;
let lastEmit = $.now();
let cursors = {};

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  private theCanvas: any;
  private context: any;
  private buttonClean: any;
  private socket: any;
	private click: any
	private block: any;	
	private event: MouseEvent;
	public connection;

  constructor(elementRef: ElementRef) { }
  
  ngOnInit() {

		this.theCanvas = document.getElementById("canvas");    
    this.context = this.theCanvas.getContext("2d");
		this.buttonClean = document.getElementById("clean");
    this.socket = io('http://localhost:5000');
    this.clean();

		this.click = false; //Cambia a true si el usuario esta pintando
		this.block = false;
		
		this.connection = this.getDibujo().subscribe((data: any) => {
			if (data.codigo == "down") {
				this.startLine(data);
			}
			else if (data.codigo == "up") {
				this.closeLine(data);
			}
			else if (data.codigo == "move") {
				this.draw(data);
			}
			else if(data.codigo == "moveT"){
				this.moveHandler(data);
			}
		});
  }	

	ngOnDestroy() {
    this.connection.unsubscribe();
  }

  clean(){
    this.context.fillStyle = "green";
    this.context.fillRect(0,0, this.theCanvas.width, this.theCanvas.height);
  }

  startLine(e:MouseEvent){
		let positionX = e.clientX - document.getElementById("canvas").getBoundingClientRect().left;
		let positionY = e.clientY - document.getElementById("canvas").getBoundingClientRect().top;

    this.context.beginPath();
    this.context.strokeStyle = "#fff";
    this.context.lineCap = "round";
    this.context.lineWidth = 5;
    this.context.moveTo(positionX,positionY);
  }

  closeLine(e:MouseEvent){
    this.context.closePath();
  }
	
	//Muestra el cursero de los demas usuarios
	mousemoveHandler(e: MouseEvent) {
    if($.now() - lastEmit > 30){
      var movement = {
        'x': e.pageX,
        'y': e.pageY
      };
      this.socket.emit('mousemove', movement);
      lastEmit = $.now();
		}
	}

  //Dibujamos el trazo recibiendo la posición actual del ratón.
  draw(e:MouseEvent){		
		let positionX = e.clientX - document.getElementById("canvas").getBoundingClientRect().left;
		let positionY = e.clientY - document.getElementById("canvas").getBoundingClientRect().top;
		
		//debugger;
    this.context.lineTo(positionX,positionY);
    this.context.stroke();

	}
		//Al mover el ratón mientras esta clickado enviamos coordenadas donde continuar el trazo.
	movercanvas(e:MouseEvent){
		if(this.click){
			if(!this.block){				
				this.socket.emit('draw',{clientX : e.clientX, clientY : e.clientY});				
				this.draw(e);
			}
		}
	}

	//Al clickar en la pizarra enviamos el punto de inicio del trazo
	moverabajo(e:MouseEvent){
			if(!this.block){
				this.socket.emit('startLine',{clientX : e.clientX, clientY : e.clientY});
				this.click = true;
				this.startLine(e);
			}
		}
	
	//Al soltar el click (dentro o fuera del canvas) enviamos orden de terminar el trazo
	moverarriba(e:MouseEvent){
		if(!this.block){
			this.socket.emit('closeLine',{clientX : e.clientX, clientY : e.clientY});
			this.click = false;
			this.closeLine(e);
		}
	}

	//Al darle click al botón limpiar enviamos orden de devolver la pizarra a su estado inicial.
	resetear(){
		if(!this.block){
			this.socket.emit('clean',true);
		}
	}

	moveHandler(data) {
    //if(! (data.id in clients)){
			// le damos un cursor a cada usuario nuestro
			debugger;
      cursors[data.codigo] = $('<div class="cursor">').appendTo('#cursors');
    //}
	}

	getDibujo() {
		
    let observable = new Observable(observer => {
			
			//Recibimos mediante websockets las ordenes de dibujo

			this.socket.on('down',function(data){				
				if(!this.click){
					this.block = true;
					data.codigo = "down";
					observer.next(data);
					//this.startLine(e);
				}
			});

			this.socket.on('up',function(data){
				if(!this.click){
					this.block = false;
					data.codigo = "up";
					observer.next(data);
					//this.closeLine(e);
				}
			});

			this.socket.on('move',function(data){
				if(this.block){
					data.codigo = "move";
					observer.next(data);
					//this.draw(e);
				}
			});

			this.socket.on('moveT', function(data){				
					data.codigo = "moveT";
					observer.next(data);								
			});
			
			this.socket.on('clean',this.clean);

      /*this.socket.on('message', (message: Message) => {
        observer.next(message);
			});*/
			
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
