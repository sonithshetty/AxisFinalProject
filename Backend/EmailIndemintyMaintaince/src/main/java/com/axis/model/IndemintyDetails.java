package com.axis.model;

import javax.persistence.Id;

public class IndemintyDetails {
	
	@Id
	private int id;
	private String name;
	private String emailId;
	private Long faxNumber;
	private Long referenceNumber;
	private Boolean digitalSignature;
	private Boolean delete;
	private Boolean modify;
	private Boolean verify;
	public IndemintyDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public IndemintyDetails(String name, String emailId, Long faxNumber, Long referenceNumber, Boolean digitalSignature,
			Boolean delete, Boolean modify, Boolean verify) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.faxNumber = faxNumber;
		this.referenceNumber = referenceNumber;
		this.digitalSignature = digitalSignature;
		this.delete = delete;
		this.modify = modify;
		this.verify = verify;
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
	public Long getReferenceNumber() {
		return referenceNumber;
	}
	public void setReferenceNumber(Long referenceNumber) {
		this.referenceNumber = referenceNumber;
	}
	public Boolean getDigitalSignature() {
		return digitalSignature;
	}
	public void setDigitalSignature(Boolean digitalSignature) {
		this.digitalSignature = digitalSignature;
	}
	public Boolean getDelete() {
		return delete;
	}
	public void setDelete(Boolean delete) {
		this.delete = delete;
	}
	public Boolean getModify() {
		return modify;
	}
	public void setModify(Boolean modify) {
		this.modify = modify;
	}
	public Boolean getVerify() {
		return verify;
	}
	public void setVerify(Boolean verify) {
		this.verify = verify;
	}

}
