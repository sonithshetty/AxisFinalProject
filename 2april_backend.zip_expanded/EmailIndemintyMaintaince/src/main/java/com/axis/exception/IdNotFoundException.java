package com.axis.exception;

public class IdNotFoundException extends RuntimeException{
	private String msg;
	public IdNotFoundException(String msg) {
		this.msg = msg;
	}
	public String getMsg() {
		return msg;
	}
}
