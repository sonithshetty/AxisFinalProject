package com.axis.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "TBL_CUST_ACC_DETAIL", uniqueConstraints={@UniqueConstraint(columnNames={"Cust_ID"})})
public class AccountDetails {
	
	@Id
	@Column(name = "Account_number", columnDefinition = "VARCHAR(16) NOT NULL")
	private String accountNo;

	@Column(name = "Cust_ID",columnDefinition = "VARCHAR(9) NOT NULL")
	private String customerId;
	
	@Column(name = "ACCT_CL_FLG", columnDefinition = "CHAR(1) DEFAULT 'N'")
	private char accountFlag;

	
	@OneToMany(targetEntity = IndemnityDetails.class, cascade = CascadeType.ALL )
	@JoinColumn(name = "accountNo", referencedColumnName = "Account_number")
	private List<IndemnityDetails> indemintydetails;
	
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
