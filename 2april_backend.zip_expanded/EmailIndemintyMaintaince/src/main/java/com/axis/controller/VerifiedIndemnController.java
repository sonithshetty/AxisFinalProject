package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.VerifiedIndemnityDTO;
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
	public ResponseEntity<List<VerifiedIndemnityDTO>> getDetails(){
		List<IndemnityDetails> indemnDetails = indemnRepository.findAll();
		List<VerifiedIndemnityDTO> verifiedListDTO = verifiedService.addVerifiedDetails(indemnDetails);
        return ResponseEntity.ok(verifiedListDTO);
	}
	
	@GetMapping("/verified/{accountNo}")
	public ResponseEntity<List<VerifiedIndemnityDTO>> getDetailsByAccountNo(@PathVariable String accountNo) {
        List<VerifiedIndemnityDTO> verifiedDetailsDTO = verifiedService.getDetailsByAccountNo(accountNo);
        return ResponseEntity.ok(verifiedDetailsDTO);
    }
	
	@PutMapping("/verified/update")
	public ResponseEntity<List<VerifiedIndemnity>> updateDetailsByIdList(@RequestBody List<VerifiedIndemnity> verifiedDetails) {
		List<VerifiedIndemnity> updatedVerifiedDetails = verifiedService.updateDetailsByIdList(verifiedDetails);
        return ResponseEntity.ok(updatedVerifiedDetails);
    }
	
	@DeleteMapping("/verified/delete")
	public ResponseEntity<List<Integer>> deleteDetailsByIdList(@RequestBody List<Integer> ids) {
	    List<Integer> deletedIds = verifiedService.deleteVerifiedDetailsByIdList(ids);
	    return ResponseEntity.ok(deletedIds);
	}
	
}
