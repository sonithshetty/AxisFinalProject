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

import com.axis.model.AccountDetails;
import com.axis.repository.AccountDetailsRepository;
import com.axis.service.AccountDetailsService;

@CrossOrigin("http://localhost:3000")
@RestController
public class AccountController {
	
	@Autowired
	private AccountDetailsService accountDetailsService;
	
	@Autowired
	AccountDetailsRepository accountRepository;
	
	@PostMapping("/accounts")	//maker cannot access this
	ResponseEntity<AccountDetails> addDetails(@RequestBody AccountDetails accountDetails){
		return new ResponseEntity<AccountDetails>(accountDetailsService.addDetails(accountDetails), HttpStatus.OK);
	}
	
	@GetMapping("/accounts")	//maker can access this
	ResponseEntity<List<AccountDetails>> getAllDetails(){
		return new ResponseEntity<List<AccountDetails>>(accountDetailsService.getAllDetails(), HttpStatus.OK);
	}
	
	@GetMapping("/accounts/{accountNo}") //maker can access this
	ResponseEntity<AccountDetails> getDetailsByAccountID(@PathVariable String accountNo){
		return new ResponseEntity<AccountDetails>(accountDetailsService.getDetailsByAccountNo(accountNo), HttpStatus.OK);
	}
	
	@PutMapping("/accounts/{accountNo}")	//maker cannot access this, but checker can
	ResponseEntity<AccountDetails> updateDetailsByAccountID(@PathVariable String accountNo, @RequestBody AccountDetails accountDetails){
		return new ResponseEntity<AccountDetails>(accountDetailsService.updateDetailsByAccountNo(accountNo, accountDetails), HttpStatus.OK);
	}
	
	@DeleteMapping("/accounts/{accountNo}")	//maker cannot access this
	ResponseEntity<String> deleteDetailsByAccountID(@PathVariable String accountNo){
		return new ResponseEntity<String>(accountDetailsService.deleteDetailsByAccountNo(accountNo), HttpStatus.OK);
	}
	
	

}
