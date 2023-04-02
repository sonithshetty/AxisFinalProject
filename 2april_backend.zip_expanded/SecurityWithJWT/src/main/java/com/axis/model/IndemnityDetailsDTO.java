package com.axis.model;

import com.axis.model.IndemnityDetails;

public class IndemnityDetailsDTO {

	private int id;
	private String name;
	private String emailId;
	private Long faxNumber;
	private String referenceNumber;  //to be entered only if digital signature available and auto-delete when if disabled again 
	private String accountNo;
	private Boolean verify;
	
	public IndemnityDetailsDTO() {
		super();
	}
	public IndemnityDetailsDTO(IndemnityDetails indemnityDetails) {
		this.id = indemnityDetails.getId();
		this.name = indemnityDetails.getName();
		this.emailId = indemnityDetails.getEmailId();
		this.faxNumber = indemnityDetails.getFaxNumber();
		this.referenceNumber = indemnityDetails.getReferenceNumber();
		this.accountNo = indemnityDetails.getAccountNo();
		this.verify = indemnityDetails.getVerify();
	}

	
	public IndemnityDetailsDTO(int id, String name, String emailId, Long faxNumber, String referenceNumber,
			String accountNo, Boolean verify) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.faxNumber = faxNumber;
		this.referenceNumber = referenceNumber;
		this.accountNo = accountNo;
		this.verify = verify;
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
	public Boolean getVerify() {
		return verify;
	}
	public void setVerify(Boolean verify) {
		this.verify = verify;
	}
	@Override
	public String toString() {
		return "IndemnityDetailsDTO [id=" + id + ", name=" + name + ", emailId=" + emailId + ", faxNumber=" + faxNumber
				+ ", referenceNumber=" + referenceNumber + ", accountNo=" + accountNo + ", verify=" + verify + "]";
	}
	
	
}
