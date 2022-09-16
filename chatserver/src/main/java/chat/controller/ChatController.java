package chat.controller;

import chat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message")
    public Message receivePrivateMessage(@Payload Message message){
        System.out.println(message);
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverId().toString(),"/private",message);
        return message;
    }
}
