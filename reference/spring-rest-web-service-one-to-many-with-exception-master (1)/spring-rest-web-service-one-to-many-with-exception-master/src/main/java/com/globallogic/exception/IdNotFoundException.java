package com.globallogic.exception;

public class IdNotFoundException extends RuntimeException{
	public String message;

	public IdNotFoundException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
