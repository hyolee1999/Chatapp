package chat.controller;

import chat.model.Friend;
import chat.model.User;
import chat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user ){
        User newUser = userService.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        User oldUser = userService.loginUser(user);
        return new ResponseEntity<>(oldUser, HttpStatus.OK);
    }

    @PostMapping("/friend")
    public ResponseEntity<List<Friend>> getFriend(@RequestBody User user) {
        List<Friend> friends = userService.getFriend(user);
        return new ResponseEntity<>(friends, HttpStatus.OK);
    }


}
