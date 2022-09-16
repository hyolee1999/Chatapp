package chat.config;

import lombok.extern.slf4j.Slf4j;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.ChannelInterceptor;
//import org.springframework.web.socket.TextMessage;
//import org.springframework.web.socket.WebSocketMessage;
//import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Slf4j
public class UserInterceptor implements ChannelInterceptor {

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        channel.send(message);
        return message;
    }
//    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws IOException {
//        log.info("Message : {}",message.getPayload());
//        session.sendMessage(new TextMessage("Hello bro"));
//    }

}
