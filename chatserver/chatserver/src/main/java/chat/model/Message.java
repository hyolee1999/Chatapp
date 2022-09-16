package chat.model;


import chat.enumeration.Status;
import lombok.*;

import javax.persistence.Entity;
import java.io.Serializable;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class Message implements Serializable {
//    @NonNull
    private Long senderId;
    private String senderName;
//    @NonNull
    private Long receiverId;
    private String receiverName;
    private String message;
//    private String date;
//    private Status status;
}
