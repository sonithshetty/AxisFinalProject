package com.axis.model;

public class UserDto {
	private String fullName;
	private String email;
	private String roles;
	private String username;
    private String password;

	public String getFullName() { return fullName; }
	
	public void setFullName(String fullName) { this.fullName = fullName; }
		
	public String getEmail() { return email; }
	
	public void setEmail(String email) { this.email = email; }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	public UserDto(String fullName, String email, String username, String password) {
		super();
		this.fullName = fullName;
		this.email = email;
		//this.number = number;
		this.username = username;
		this.password = password;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}
}
