package chat.service;

import chat.enumeration.UserStatus;
import chat.exception.UserNotFoundException;
import chat.model.Friend;
import chat.repo.UserRepo;
import chat.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public User createUser(User user){
        user.setUserCode(UUID.randomUUID().toString());
        user.setUserStatus(UserStatus.OFFLINE);
        return this.userRepo.save(user);
    }

    public User loginUser(User user){

        String email = user.getEmail();


        User checkUser = this.userRepo.findByEmail(email).orElseThrow(() -> new UserNotFoundException("User by email" + email +"was not found"));
        if (checkUser.getPassword().equals(user.getPassword())){
            return checkUser;
        }
        return null;
    }

    public List<Friend> getFriend(User user){
        List<Friend> friends = this.userRepo.findAll().stream().map(
                friend ->{
                    if(friend.getId() != user.getId()){
                        return new Friend(friend.getId(), friend.getName());
                    }else{
                        return null;
                    }

                }
        ).collect(Collectors.toList());

        return  friends;

    }



}
