package com.axis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_CUST_ACC_DETAIL")
public class AccountDetails {
	
	@Id
	@Column(name = "Account_number")
	private Long accountNo;
	
	@Column(name = "Cust_ID")
	private Long customerId;
	
	@Column(name = "ACCT_CL_FLG")
	private char accountFlag;
	
	public AccountDetails() {
		super();
	}
	public AccountDetails( Long accountNo,Long customerId, char accountFlag) {
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
