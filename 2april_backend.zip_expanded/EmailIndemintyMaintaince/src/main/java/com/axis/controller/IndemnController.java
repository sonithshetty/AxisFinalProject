package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.IndemnityDetailsDTO;
import com.axis.model.IndemnityDetails;
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
	ResponseEntity<List<IndemnityDetails>> addDetails(@RequestBody List<IndemnityDetailsDTO> indemnityDetailsDTO) {
        List<IndemnityDetails> savedIndemnityDetailsDTO = indemnService.addDetails(indemnityDetailsDTO);
        return ResponseEntity.ok(savedIndemnityDetailsDTO);
    }

	@GetMapping("/indemn")
	public ResponseEntity<List<IndemnityDetailsDTO>> getAllDetails() {
        List<IndemnityDetailsDTO> indemnityDetailsDTOList = indemnService.getAllDetails();
        return ResponseEntity.ok(indemnityDetailsDTOList);
    }
	
	
	@GetMapping("/indemn/{accountNo}")
	public ResponseEntity<List<IndemnityDetailsDTO>> getDetailsByAccountNo(@PathVariable String accountNo) {
        List<IndemnityDetailsDTO> indemnityDetailsDTO = indemnService.getDetailsByAccountNo(accountNo);
        return ResponseEntity.ok(indemnityDetailsDTO);
    }
	
	@PutMapping("/indemn/{id}")
	public ResponseEntity<IndemnityDetailsDTO> updateDetailsById(@PathVariable("id") int id, @RequestBody IndemnityDetailsDTO indemnityDetailsDTO) {
        IndemnityDetailsDTO updatedIndemnityDetailsDTO = indemnService.updateDetailsById(id, indemnityDetailsDTO);
        return ResponseEntity.ok(updatedIndemnityDetailsDTO);
    }
	
	@PutMapping("/indemn/update")
	public ResponseEntity<List<IndemnityDetails>> updateDetailsByIdList(@RequestBody List<IndemnityDetails> indemnityDetails) {
		List<IndemnityDetails> updatedIndemnityDetails = indemnService.updateDetailsByIdList(indemnityDetails);
        return ResponseEntity.ok(updatedIndemnityDetails);
    }
	
	@DeleteMapping("/indemn/{id}")
	public ResponseEntity<String> deleteDetailsById(@PathVariable("id") int id) {
        String message = indemnService.deleteDetailsById(id);
        return ResponseEntity.ok(message);
    }
	
	@DeleteMapping("/indemn/cancel")
	public ResponseEntity<List<Integer>> deleteDetailsByIdList(@RequestBody List<Integer> ids) {
	    List<Integer> deletedIds = indemnService.deleteDetailsByIdList(ids);
	    return ResponseEntity.ok(deletedIds);
	}
	

	@GetMapping("/indemn/nonverified") 
	public ResponseEntity<List<IndemnityDetails>> getDetailsByIsNotVerified(){
		List<IndemnityDetails> indemnityDetailsDTOList = indemnService.getDetailsByIsNotVerified();
        return ResponseEntity.ok(indemnityDetailsDTOList);
	}
	
	@GetMapping("/indemn/verified") 
	public ResponseEntity<List<IndemnityDetails>> getDetailsByVerified(){
		List<IndemnityDetails> indemnityDetailsDTOList = indemnService.getDetailsByIsVerified();
        return ResponseEntity.ok(indemnityDetailsDTOList);
	}

}
