package com.axis.service;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.axis.model.UserDao;

public class CustomeUserDetails implements org.springframework.security.core.userdetails.UserDetails{

	private UserDao user;

	public CustomeUserDetails(UserDao user) {
		super();
		this.user = user;
	}

	public CustomeUserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority simpleAuthority = new SimpleGrantedAuthority(user.getRoles());
		return List.of(simpleAuthority);
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	public String getFullName() {
		return user.getFullName();
	}
	public String getEmail() {
		return user.getEmail();
	}
	
	public String getRoles() {
		
		return user.getRoles();
	}
}
