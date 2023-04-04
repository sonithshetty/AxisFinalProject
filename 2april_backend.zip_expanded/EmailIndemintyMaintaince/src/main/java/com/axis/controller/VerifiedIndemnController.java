package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.IndemnityDetails;
import com.axis.model.VerifiedIndemnity;
import com.axis.repository.IndemnityDetailsRepository;
import com.axis.repository.VerifiedIndemnityRepository;
import com.axis.service.IndemnityDetailsService;
import com.axis.service.VerifiedIndemnityService;

@CrossOrigin("http://localhost:3000")
@RestController
public class VerifiedIndemnController {
	
	@Autowired
	IndemnityDetailsService indemnService;
	
	@Autowired
	VerifiedIndemnityService verifiedService;
	
	@Autowired
	IndemnityDetailsRepository indemnRepository;
	
	@Autowired
	VerifiedIndemnityRepository verifiedRepository;
	
	
	@GetMapping("/verified")
	public ResponseEntity<List<VerifiedIndemnity>> getDetails(){
		List<IndemnityDetails> indemnDetails = indemnRepository.findAll();
		List<VerifiedIndemnity> verifiedList = verifiedService.addVerifiedDetails(indemnDetails);
        return ResponseEntity.ok(verifiedList);
	}
	
	@DeleteMapping("/verified/{id}")
	public ResponseEntity<String> deleteDetailsById(@PathVariable("id") int id) {
        String message = verifiedService.deleteVerifiedDetails(id);
        return ResponseEntity.ok(message);
    }
	
}
