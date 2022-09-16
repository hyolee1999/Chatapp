import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import { User } from '../auth/login/user';
import { WebsocketService } from '../service/websocket.service';
import { NgForm } from '@angular/forms';
import { Message } from '../message/ChatMessage';
import { webSocket } from 'rxjs/webSocket';
import { Friend } from '../auth/login/friend';
import { UserService } from '../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatappComponent implements OnInit {
  public user : User;
  public friends : Friend[];
  public currentFriend : Friend;
  public currFriend  = new BehaviorSubject<boolean>(false);
  currfriend$ = this.currFriend.asObservable()
  // Sock = new SockJS('http://localhost:8080/chat'); 

  // private chatroomstatus  = new BehaviorSubject<ChatMessage[]>([])
  public chatroom : Message[]; 


  
  private stompClient : any;
  constructor(private websocket : WebsocketService, private userService: UserService) { 

    
  }

  async() : void{
    this.user =  history.state.data as User;
    this.getFriends();
  }

  async ngOnInit(): Promise<void> {
    await this.async();
    
    // this.getFriends(this.user);
    
    // let Sock = new SockJS('http://localhost:8080/chat'); 
    this.chatroom =  [];
    let Sock = new WebSocket("ws://localhost:8080/chat");
    this.stompClient = Stomp.Stomp.over(Sock);
    // this.stompClient.connect({},this.onConnected(), this.onError());
    let that = this;
    this.stompClient.connect({},() => {
      // that.stompClient.subscribe("/errors", function(message: { body: string; }) {
      //   alert("Error " + message.body);
      // });
      that.stompClient.subscribe('/user/'+that.user.id.toString() +'/private', (message: any) => {
        
        // that.showGreeting(message.body);
        // console.log(message.body);
        this.chatroom.push(JSON.parse(message.body) as Message);
        var elem = document.getElementById("body");
        if (elem?.scrollHeight ){
          elem!.scrollTop = elem!.scrollHeight;
        }
      });
      
    }, (error: string) => {
      alert("STOMP error " + error);
    });
    

  }


  public getFriends(): void {
    // console.log("bcd",this.user, typeof(this.user))
    
    this.userService.$friends(this.user).subscribe(
     
        (response : Friend[]) => {
        

        this.friends = response;

        this.friends = this.friends.filter((friend :Friend) => {
            return friend !== null;
        } )
        console.log(this.friends);
        
      }
      
    )
  }

  public chooseFriend(friend : Friend){

    this.currentFriend = friend;
    this.currFriend.next(true);
    // console.log(friend);
    this.chatroom =  [];  
    // const container = document.getElementById('main-container');
    // const button = document.createElement('button');
    // button.type = 'button';
    // button.style.display = 'none';
    // button.setAttribute('data-toggle','modal');
    // button.setAttribute('data-target','#chat');

    // button.click();



  

  }
  searchFriends(key : string): void{
    const results : Friend[] = [];
    for (const friend of this.friends){
      if (friend.name.toLowerCase().indexOf(key.toLowerCase()) != -1){
        results.push(friend);
      }
    }
    this.friends = results;
    if (results.length == 0 || !key){
      this.getFriends();
    }
  }









  // showGreeting(message : Message) : void {

  //   // this.showConversation = true;
  //   // this.greetings.push(message);
  // }

  sendMessage(form : NgForm) : void{
    const formValue = form.value as Message;
    // console.log({...formValue,senderId:this.user.id,sender})
    formValue.senderId = this.user.id;
    formValue.receiverId = this.currentFriend.id;
    formValue.receiverName = this.currentFriend.name;
    formValue.senderName = this.user.name;
    // console.log(formValue);
    
    this.chatroom.push(formValue);
    var elem = document.getElementById("body");
    if (elem?.scrollHeight){
      elem!.scrollTop = elem!.scrollHeight;
    }

    

    
    
    // console.log(JSON.stringify(formValue));
    form.reset();
    this.stompClient.send("/app/message", {}, JSON.stringify(formValue));


  }



//   onConnected() : void{
//     console.log('Connected ');
//     this.stompClient.subscribe('/user/' + this.user.id.toString() +'/private',function(message) {
//       // called when the client receives a STOMP message from the server
//       if (message.body) {
//         alert("got message with body " + message.body)
//       } 
//       else
//       {
//         alert("got empty message");
//       }
//     });
//   };

//   onSend():void{
    
//   }

 

//   onError() : void{
//     console.log("Error");
    
//   }

// }
// function over(Sock: WebSocket): any {
//   throw new Error('Function not implemented.');
// }
}
