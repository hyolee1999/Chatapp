import { Status } from "../enum/status.enum";

export interface Message {
    senderId : number;
    senderName: string;
    receiverId : number;
    receiverName: string;
    message : string;
    // date : string;
    // status : Status;
    

    // constructor(senderName: string, receiverName: string , message: string , date : string , status : Status){
    //     this.senderName = senderName;
    //     this.receiverName = receiverName;
    //     this.message = message;
    //     this.date = date;
    //     this.status = status;
    // }
}