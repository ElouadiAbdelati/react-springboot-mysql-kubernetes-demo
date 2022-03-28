package com.example.spring.rest;

import com.example.spring.bean.User;
import com.example.spring.dao.UserDao;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
  


import java.util.List;

@RestController
@RequestMapping("users")
@AllArgsConstructor
@CrossOrigin("*")
public class UserRest {
        
        
        
        
        
    private UserDao userDao;

    @GetMapping("/")
    public List<User> findAll(){
        return userDao.findAll();
    }
   

    @PostMapping("/")
    public User save(@RequestBody User user){
        return userDao.save(user);
    }
}
