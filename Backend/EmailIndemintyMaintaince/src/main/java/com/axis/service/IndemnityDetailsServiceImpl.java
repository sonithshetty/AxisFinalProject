package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.IdNotFoundException;
import com.axis.model.IndemintyDetails;
import com.axis.repository.IndemnityDetailsRepository;

@Service
public class IndemnityDetailsServiceImpl implements IndemnityDetailsService{

	@Autowired
	IndemnityDetailsRepository indemnRepository;
	
	@Override
	public IndemintyDetails addDetails(IndemintyDetails indemnDetails) {
		// TODO Auto-generated method stub
		return indemnRepository.save(indemnDetails);
	}

	@Override
	public List<IndemintyDetails> getAllDetails() {
		// TODO Auto-generated method stub
		return indemnRepository.findAll();
	}

	@Override
	public IndemintyDetails getDetailsById(int id) {
		// TODO Auto-generated method stub
		Optional<IndemintyDetails> acc = indemnRepository.findById(id);
		
		if(acc.isPresent())
			return acc.get();
		else
			throw new IdNotFoundException("No such id is present to get the value");
	
	}

	@Override
	public IndemintyDetails updateDetailsById(int id, IndemintyDetails indemnDetails) {
		// TODO Auto-generated method stub
		Optional<IndemintyDetails> acc = indemnRepository.findById(id);
		
		if(acc.isPresent())
			return indemnRepository.save(indemnDetails);
		else
			throw new IdNotFoundException("No such id is present to update the value");
	
	}

	@Override
	public String deleteDetailsById(int id) {
		// TODO Auto-generated method stub
		Optional<IndemintyDetails> acc = indemnRepository.findById(id);
		
		if(acc.isPresent()) {
			indemnRepository.deleteById(id);
			return "Account deleted Successfully";
		}else
			throw new IdNotFoundException("No such id is present to delete the value");
	
	}
	
}
