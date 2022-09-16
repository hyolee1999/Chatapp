import { Injectable } from '@angular/core';
import { AnonymousSubject, Subject } from 'rxjs/internal/Subject';
import { Message } from '../message/ChatMessage';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  
  // webSocket: WebSocket;
  // chatMessages: ChatMessage[] = [];
  private readonly apiUrl = 'http://localhost:8080/ws'; 
  // private subject: AnonymousSubject<MessageEvent>;
  public messages: Subject<Message>;

  constructor() { }

  

  // public openWebSocket(){
  //   this.webSocket = new WebSocket('ws://localhost:8080/chat');

  //   this.webSocket.onopen = (event) => {
  //     console.log('Open: ', event);
  //   };

  //   this.webSocket.onmessage = (event) => {
  //     const chatMessageDto = JSON.parse(event.data);
  //     this.chatMessages.push(chatMessageDto);
  //   };

  //   this.webSocket.onclose = (event) => {
  //     console.log('Close: ', event);
  //   };
  // }

  // public sendMessage(chatMessage: ChatMessage){
  //   this.webSocket.send(JSON.stringify(chatMessage));
  // }

  // public closeWebSocket() {
  //   this.webSocket.close();
  // }
  
}
