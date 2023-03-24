package com.axis.model;

import javax.persistence.Id;

public class AccountDetails {
	
	@Id
	private Long customerId;
	private Long accountNo;
	private char accountFlag;
	
	public AccountDetails() {
		super();
	}
	public AccountDetails(Long customerId, Long accountNo, char accountFlag) {
		super();
		this.customerId = customerId;
		this.accountNo = accountNo;
		this.accountFlag = accountFlag;
	}
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
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
	@Override
	public String toString() {
		return "AccountDetails [customerId=" + customerId + ", accountNo=" + accountNo + ", accountFlag=" + accountFlag
				+ "]";
	}
	
}
