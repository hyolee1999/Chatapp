package chat.enumeration;

import org.springframework.messaging.simp.stomp.StompCommand;

public enum Status {
    JOIN("JOIN"),
    MESSAGE("MESSAGE"),
    LEAVE("LEAVE");
    private final String status;

    Status(String status) {
        this.status = status;
    }

    public String getStatus() {
        return this.status;
    }
}
