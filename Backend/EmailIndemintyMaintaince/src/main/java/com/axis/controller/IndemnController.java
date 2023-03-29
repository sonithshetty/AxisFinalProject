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
	
	
//	ResponseEntity<IndemnityDetails> addDetails(@RequestBody IndemnityDetails indemnDetails){
//		return new ResponseEntity<IndemnityDetails>(indemnService.addDetails(indemnDetails), HttpStatus.OK);
//	}
	@PostMapping("/indemn")
	ResponseEntity<IndemnityDetailsDTO> addDetails(@RequestBody IndemnityDetailsDTO indemnityDetailsDTO) {
        IndemnityDetailsDTO savedIndemnityDetailsDTO = indemnService.addDetails(indemnityDetailsDTO);
        return ResponseEntity.ok(savedIndemnityDetailsDTO);
    }
	
//	ResponseEntity<List<IndemnityDetails>> getAllDetails(){
//		return new ResponseEntity<List<IndemnityDetails>>(indemnService.getAllDetails(), HttpStatus.OK);
//	}
	@GetMapping("/indemn")
	public ResponseEntity<List<IndemnityDetailsDTO>> getAllDetails() {
        List<IndemnityDetailsDTO> indemnityDetailsDTOList = indemnService.getAllDetails();
        return ResponseEntity.ok(indemnityDetailsDTOList);
    }
	
//	ResponseEntity<IndemnityDetails> getDetailsById(@PathVariable int id){
//		return new ResponseEntity<IndemnityDetails>(indemnService.getDetailsById(id), HttpStatus.OK);
//	}
//	@GetMapping("/indemn/{id}")
//	public ResponseEntity<IndemnityDetailsDTO> getDetailsById(@PathVariable int id) {
//        IndemnityDetailsDTO indemnityDetailsDTO = indemnService.getDetailsById(id);
//        return ResponseEntity.ok(indemnityDetailsDTO);
//    }
	
	@GetMapping("/indemn/{accountNo}")
	public ResponseEntity<List<IndemnityDetailsDTO>> getDetailsByAccountNo(@PathVariable String accountNo) {
        List<IndemnityDetailsDTO> indemnityDetailsDTO = indemnService.getDetailsByAccountNo(accountNo);
        return ResponseEntity.ok(indemnityDetailsDTO);
    }
	
//	@GetMapping("/indemn/{accountNo}")
//    public ResponseEntity<List<IndemnityDetailsDTO>> getDetailsByAccountNo(@PathVariable String accountNo) {
//        String accountno = indemnDetailsDTO.getAccountNo();
//        if (accountno != null) {
//            return new ResponseEntity<List<IndemnityDetailsDTO>>(indemnService.getDetailsByAccountNo(accountNo), HttpStatus.OK);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
	
//	ResponseEntity<IndemnityDetails> updateDetailsByAccountID(@PathVariable int id, @RequestBody IndemnityDetails indemnDetails){
//		return new ResponseEntity<IndemnityDetails>(indemnService.updateDetailsById(id, indemnDetails), HttpStatus.OK);
//	}
	@PutMapping("/indemn/{id}")
	public ResponseEntity<IndemnityDetailsDTO> updateDetailsById(@PathVariable("id") int id, @RequestBody IndemnityDetailsDTO indemnityDetailsDTO) {
        IndemnityDetailsDTO updatedIndemnityDetailsDTO = indemnService.updateDetailsById(id, indemnityDetailsDTO);
        return ResponseEntity.ok(updatedIndemnityDetailsDTO);
    }
	
//	ResponseEntity<String> deleteDetailsByAccountID(@PathVariable int id){
//		return new ResponseEntity<String>(indemnService.deleteDetailsById(id), HttpStatus.OK);
//	}
	@DeleteMapping("/indemn/{id}")
	public ResponseEntity<String> deleteDetailsById(@PathVariable("id") int id) {
        String message = indemnService.deleteDetailsById(id);
        return ResponseEntity.ok(message);
    }
	
}
