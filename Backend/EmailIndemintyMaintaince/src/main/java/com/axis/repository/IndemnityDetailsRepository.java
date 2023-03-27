package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.IndemintyDetails;

@Repository
public interface IndemnityDetailsRepository extends JpaRepository<IndemintyDetails, Long>{

}
