package com.axis.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.axis.config.JwtTokenUtil;
import com.axis.model.JwtRequest;
import com.axis.model.JwtResponse;
import com.axis.model.UserDao;
import com.axis.model.UserDto;
import com.axis.service.CustomeUserDetails;
import com.axis.service.JwtUserDetailsService;
import com.axis.utility.RoleConstants;

@RestController
@CrossOrigin
@RequestMapping("/authentication")
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@PostMapping("/login")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}

	@PostMapping("/maker/register")
	public ResponseEntity<?> saveUser(@RequestBody UserDto user) throws Exception {
		user.setRoles(RoleConstants.USER_ROLE);
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	@PostMapping("/checker/register")
	public ResponseEntity<?> saveManeger(@RequestBody UserDto user) throws Exception {
		user.setRoles(RoleConstants.ADMIN_ROLE);
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	@GetMapping("/userInfo")
	@PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')")
	public ResponseEntity<?> getUserInfo(Principal user){
		CustomeUserDetails userObj = (CustomeUserDetails) userDetailsService.loadUserByUsername(user.getName());
		
		UserDao userInfo = new UserDao();
		userInfo.setFullName(userObj.getFullName());
		userInfo.setEmail(userObj.getEmail());
		userInfo.setUsername(userObj.getUsername());
		userInfo.setPassword(userObj.getPassword());
		userInfo.setRoles(userObj.getRoles());
		
		return ResponseEntity.ok(userInfo);
	}

	@GetMapping("/msg")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public String getMsg() {
		return "this user role";
	}
	
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
