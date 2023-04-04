package com.axis.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.IndemnityDetailsDTO;
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
	
//	@PostMapping("/verified")
//	ResponseEntity<VerifiedIndemnity> addDetails(@RequestBody VerifiedIndemnity verifiedDetails){
//		return new ResponseEntity<VerifiedIndemnity>(verifiedService.addVerifiedDetails(verifiedDetails), HttpStatus.OK);
//	}
	
	@GetMapping("/verified")
	public ResponseEntity<List<VerifiedIndemnity>> getDetails(@RequestBody IndemnityDetails indemnDetails){
		List<VerifiedIndemnity> verifiedList = verifiedService.addVerifiedDetails(indemnDetails);
        return ResponseEntity.ok(verifiedList);
	}
	
	
}
