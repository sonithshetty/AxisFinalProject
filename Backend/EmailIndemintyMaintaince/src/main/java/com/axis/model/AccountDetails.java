package com.axis.model;

import javax.persistence.Id;

public class AccountDetails {
	
	@Id
	private Long custmorId;
	private Long accountNo;
	private char accountFlag;
	public AccountDetails(Long custmorId, Long accountNo, char accountFlag) {
		super();
		this.custmorId = custmorId;
		this.accountNo = accountNo;
		this.accountFlag = accountFlag;
	}
	public AccountDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getCustmorId() {
		return custmorId;
	}
	public void setCustmorId(Long custmorId) {
		this.custmorId = custmorId;
	}
	public Long getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(Long accountNo) {
		this.accountNo = accountNo;
	}
	public char getAccountFlag() {
		return accountFlag;
	}
	public void setAccountFlag(char accountFlag) {
		this.accountFlag = accountFlag;
	}
	
}
