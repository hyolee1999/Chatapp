package chat.model;

import chat.enumeration.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    @Column(unique = true)
    @NotEmpty(message = "Email cannot be empty or null")
    private String email;
    @NotEmpty(message = "Password cannot be empty or null")
    private String password;
    @Column(nullable = false,updatable = false)
    private String userCode;
    private UserStatus userStatus;


}
