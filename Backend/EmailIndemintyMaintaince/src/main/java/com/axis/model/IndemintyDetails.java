package com.axis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "INDEMNITY_DETAILS")
public class IndemintyDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Account_number", referencedColumnName = "Account_number")
	private AccountDetails accountDetails;
	
//	private Long accountNo;
	
	@Column(name = "AUTHORISED_SIGNATORY")
	private String name;
	private String emailId;
	private Long faxNumber;
	private Long referenceNumber;  //to be entered only if digital signature available and auto-delete when if disabled again 
//	private Boolean digitalSignature;
//	private Boolean delete;
//	private Boolean modify;
//	private Boolean verify;
	
	public IndemintyDetails() {
		super();
		
	}
	public IndemintyDetails(String name, String emailId, Long faxNumber, Long referenceNumber) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.faxNumber = faxNumber;
		this.referenceNumber = referenceNumber;
//		this.digitalSignature = digitalSignature;
//		this.delete = delete;
//		this.modify = modify;
//		this.verify = verify;
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
//	public Boolean getDigitalSignature() {
//		return digitalSignature;
//	}
//	public void setDigitalSignature(Boolean digitalSignature) {
//		this.digitalSignature = digitalSignature;
//	}
//	public Boolean getDelete() {
//		return delete;
//	}
//	public void setDelete(Boolean delete) {
//		this.delete = delete;
//	}
//	public Boolean getModify() {
//		return modify;
//	}
//	public void setModify(Boolean modify) {
//		this.modify = modify;
//	}
//	public Boolean getVerify() {
//		return verify=false;
//	}
//	public void setVerify(Boolean verify) {
//		this.verify = verify;
//	}
}
