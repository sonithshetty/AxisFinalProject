package com.axis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_CUST_ACC_DETAIL")
public class AccountDetails {
	
	@Id
	@Column(name = "Account_number", columnDefinition = "VARCHAR(16) NOT NULL")
	private String accountNo;

	@Column(name = "Cust_ID",columnDefinition = "VARCHAR(9) NOT NULL")
	private String customerId;
	
	@Column(name = "ACCT_CL_FLG")
	private char accountFlag;
	
	public AccountDetails() {
		super();
	}
	public AccountDetails( String accountNo,String customerId, char accountFlag) {
		super();
		this.customerId = customerId;
		this.accountNo = accountNo;
		this.accountFlag = accountFlag;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
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
