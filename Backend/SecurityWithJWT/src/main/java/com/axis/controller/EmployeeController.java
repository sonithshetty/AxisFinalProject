package com.axis.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axis.dto.IndemnityDetailsDTO;
import com.axis.model.UserDao;
import com.axis.repository.UserRepository;
@RestController
@CrossOrigin
@RequestMapping("/about")
public class EmployeeController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RestTemplate restTemplate;
    
	@PostMapping("/user")
    ResponseEntity<UserDao> findByUsername(@RequestBody String username){
    	return new ResponseEntity<UserDao>(userRepository.findByUsername(username), HttpStatus.OK);
    }
	
	@GetMapping("/allusers")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public List<UserDao> getAllUser(){
		return userRepository.findAll();
	}
	
	@PostMapping("/indemn")
	ResponseEntity<List<IndemnityDetailsDTO>> addDetails(@RequestBody IndemnityDetailsDTO indemnityDetailsDTO) {        
        String url = "http://EmailIndemintyMaintainceApplication/indemn";
        List<IndemnityDetailsDTO> indemnityDetailsList = restTemplate.getForObject(url, List.class);
        return ResponseEntity.ok(indemnityDetailsList);
    }
}