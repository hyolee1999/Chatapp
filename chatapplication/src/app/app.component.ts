import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
// import { NgForm } from '@angular/forms';
// import { ChatMessage } from './message/ChatMessage';
// import { WebsocketService } from './services/websocket.service';
// import * as Stomp from '@stomp/stompjs';
// import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-root',
  // providers: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  // title = 'chatapp';

  // greetings: string[] = [];
  // disabled = true;
  // name: string;
  // private stompClient : any;

  // constructor() { }

  // setConnected(connected: boolean) {
  //   this.disabled = !connected;

  //   if (connected) {
  //     this.greetings = [];
  //   }
  // }

  // connect() {
  //   const socket = new SockJS('http://localhost:8080/chat');
  //   this.stompClient = Stomp.Stomp.over(socket);

  //   const _this = this;
  //   this.stompClient.connect({}, frame => {
  //     _this.setConnected(true);
  //     console.log('Connected: ' + frame);

  //     _this.stompClient.subscribe('/topic/hi', function (hello) {
  //       _this.showGreeting(JSON.parse(hello.body).greeting);
  //     });
  //   });
  // }

  // disconnect() {
  //   if (this.stompClient != null) {
  //     this.stompClient.disconnect();
  //   }

  //   this.setConnected(false);
  //   console.log('Disconnected!');
  // }

  // sendName() {
  //   this.stompClient.send(
  //     '/gkz/hello',
  //     {},
  //     JSON.stringify({ 'name': this.name })
  //   );
  // }

  // showGreeting(message) {
  //   this.greetings.push(message);
  // }
  

  


}
