package com.axis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "INDEMNITY_DETAILS")
public class IndemnityDetails {
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "accountNo", referencedColumnName = "Account_number")
//	private AccountDetails accountNo;
//	private Long accountNo;
	
	@Column(name = "AUTHORISED_SIGNATORY")
	private String name;
	private String emailId;
	
	@Column(name = "fax_number", nullable = true, unique = true)
	private Long faxNumber;
	
	@Column(name = "reference_number", nullable = true, unique = true)
	private String referenceNumber;  //to be entered only if digital signature available and auto-delete when if disabled again 
	private String accountNo;
	
//	private Boolean digitalSignature;
//	private Boolean delete;
//	private Boolean modify;
//	private Boolean verify;
	
	public IndemnityDetails() {
		super();
		
	}
	public IndemnityDetails(String name, String emailId, Long faxNumber, String referenceNumber,String accountNo) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.faxNumber = faxNumber;
		this.referenceNumber = referenceNumber;
		this.accountNo = accountNo;
//		this.digitalSignature = digitalSignature;
//		this.delete = delete;
//		this.modify = modify;
//		this.verify = verify;
	}
	
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
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
	@Override
	public String toString() {
		return "IndemnityDetails [id=" + id + ", name=" + name + ", emailId=" + emailId + ", faxNumber=" + faxNumber
				+ ", referenceNumber=" + referenceNumber + ", accountNo=" + accountNo + "]";
	}
	
	
}
