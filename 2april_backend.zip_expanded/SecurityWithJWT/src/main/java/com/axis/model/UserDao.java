package com.axis.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name = "user")
public class UserDao {
    public UserDao() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String fullName;
    @Column
    private String email;
    @Column
    private String username;
    @Column
    @JsonIgnore
    private String password;
    @Column
    private String roles;

    public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

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

	@Override
	public String toString() {
		return "UserDao [id=" + id + ", fullName=" + fullName + ", email=" + email
				+ ", username=" + username + ", password=" + password + "]";
	}

	public UserDao(long id, String fullName, String email, String username, String password) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		//this.number = number;
		this.username = username;
		this.password = password;
	}

}

