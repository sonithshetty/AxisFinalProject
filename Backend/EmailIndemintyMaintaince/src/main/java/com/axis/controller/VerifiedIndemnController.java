package com.axis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.VerifiedIndemnity;
import com.axis.repository.VerifiedIndemnityRepository;
import com.axis.service.VerifiedIndemnityService;

@CrossOrigin("http://localhost:3000")
@RestController
public class VerifiedIndemnController {
	
	@Autowired
	VerifiedIndemnityService verifiedService;
	
	@Autowired
	VerifiedIndemnityRepository verifiedRepository;
	
	@PostMapping("/verified")
	ResponseEntity<VerifiedIndemnity> addDetails(@RequestBody VerifiedIndemnity verifiedDetails){
		return new ResponseEntity<VerifiedIndemnity>(verifiedService.addDetails(verifiedDetails), HttpStatus.OK);
	}
	
	@GetMapping("/verified/accountNo")
	public ResponseEntity<VerifiedIndemnity> getDetailsByAccountId(@RequestBody VerifiedIndemnity verifiedDetails) {
		String accountNo = verifiedDetails.getAccountNo();
		if (accountNo != null) {
			return new ResponseEntity<VerifiedIndemnity>(verifiedService.getDetailsByAccountId(accountNo), HttpStatus.OK);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
