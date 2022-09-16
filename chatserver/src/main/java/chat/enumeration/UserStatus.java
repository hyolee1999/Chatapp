package chat.enumeration;

public enum UserStatus {
    ONLINE("ONLINE"),
    OFFLINE("OFFLINE");

    private final String Userstatus;

    UserStatus(String status) {
        this.Userstatus = status;
    };

}
