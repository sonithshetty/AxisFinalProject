package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.IdNotFoundException;
import com.axis.model.AccountDetails;
import com.axis.repository.AccountDetailsRepository;

@Service
public class AccountDetailsServiceImpl implements AccountDetailsService{

	@Autowired
	AccountDetailsRepository accountRepository;
	
	@Override
	public AccountDetails addDetails(AccountDetails accountDetails) {
		return accountRepository.save(accountDetails);
	}

	@Override
	public List<AccountDetails> getAllDetails() {
		return accountRepository.findAll();
	}

	@Override
	public AccountDetails getDetailsByAccountNo(String accountNo) {
		Optional<AccountDetails> acc = accountRepository.findById(accountNo);	
		if(acc.isPresent())
			return acc.get();
		else
			throw new IdNotFoundException("No customer with the given account number found");
	}

	@Override
	public AccountDetails updateDetailsByAccountNo(String accountNo, AccountDetails accountDetails) {
		Optional<AccountDetails> acc = accountRepository.findById(accountNo);	
		if(acc.isPresent())
			return accountRepository.save(accountDetails);
		else
			throw new IdNotFoundException("No customer with the given account number found");
	
	}

	@Override
	public String deleteDetailsByAccountNo(String accountNo) {
		Optional<AccountDetails> acc = accountRepository.findById(accountNo);
		if(acc.isPresent()) {
			accountRepository.deleteById(accountNo);
			return "Account deleted Successfully";
		}else
			throw new IdNotFoundException("No customer with the given account number found");
	
	}

}
