package com.axis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "VERIFIED_DETAILS")
public class VerifiedIndemnity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "AUTHORISED_SIGNATORY")
	private String name;
	private String emailId;
	private Long faxNumber;
	private String referenceNumber;
	private String accountNo;
	
	public VerifiedIndemnity() {
		super();
	}
	public VerifiedIndemnity(int id, String name, String emailId, Long faxNumber, String referenceNumber,
			String accountNo) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.faxNumber = faxNumber;
		this.referenceNumber = referenceNumber;
		this.accountNo = accountNo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public Long getFaxNumber() {
		return faxNumber;
	}
	public void setFaxNumber(Long faxNumber) {
		this.faxNumber = faxNumber;
	}
	public String getReferenceNumber() {
		return referenceNumber;
	}
	public void setReferenceNumber(String referenceNumber) {
		this.referenceNumber = referenceNumber;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	@Override
	public String toString() {
		return "VerifiedIndemnity [id=" + id + ", name=" + name + ", emailId=" + emailId + ", faxNumber=" + faxNumber
				+ ", referenceNumber=" + referenceNumber + ", accountNo=" + accountNo + "]";
	}

}
