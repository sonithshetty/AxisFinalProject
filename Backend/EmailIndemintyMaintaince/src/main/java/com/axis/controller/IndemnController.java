package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.IndemintyDetails;
import com.axis.repository.IndemnityDetailsRepository;
import com.axis.service.IndemnityDetailsService;

@CrossOrigin("http://localhost:3000")
@RestController
public class IndemnController {
	
	@Autowired
	IndemnityDetailsService indemnService;
	
	@Autowired
	IndemnityDetailsRepository indemnRepository;
	
	@PostMapping("/indemn")
	ResponseEntity<IndemintyDetails> addDetails(@RequestBody IndemintyDetails indemnDetails){
		return new ResponseEntity<IndemintyDetails>(indemnService.addDetails(indemnDetails), HttpStatus.OK);
	}
	
	@GetMapping("/indemn")
	ResponseEntity<List<IndemintyDetails>> getAllDetails(){
		return new ResponseEntity<List<IndemintyDetails>>(indemnService.getAllDetails(), HttpStatus.OK);
	}
	
	@GetMapping("/indemn/{id}")
	ResponseEntity<IndemintyDetails> getDetailsById(@PathVariable int id){
		return new ResponseEntity<IndemintyDetails>(indemnService.getDetailsById(id), HttpStatus.OK);
	}
	
	@PutMapping("/indemn/{id}}")
	ResponseEntity<IndemintyDetails> updateDetailsByAccountID(@PathVariable int id, @RequestBody IndemintyDetails indemnDetails){
		return new ResponseEntity<IndemintyDetails>(indemnService.updateDetailsById(id, indemnDetails), HttpStatus.OK);
	}
	
	@DeleteMapping("/indemn/{id}")
	ResponseEntity<String> deleteDetailsByAccountID(@PathVariable int id){
		return new ResponseEntity<String>(indemnService.deleteDetailsById(id), HttpStatus.OK);
	}
	
}
