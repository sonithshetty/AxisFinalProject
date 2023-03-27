package com.axis.service;

import java.util.List;

import com.axis.model.IndemintyDetails;

public interface IndemnityDetailsService {
	IndemintyDetails addDetails(IndemintyDetails indemnDetails);
	List<IndemintyDetails>  getAllDetails();
	IndemintyDetails getDetailsById(int id);
	IndemintyDetails updateDetailsById(int id, IndemintyDetails indemnDetails);
	String deleteDetailsById(int id);
}
