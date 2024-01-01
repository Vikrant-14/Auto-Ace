package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.LoginDetails;
import com.project.dto.LoginStatus;
import com.project.dto.RegistrationStatus;
import com.project.dto.Status;
import com.project.entity.Admin;
import com.project.exception.AdminServiceException;
import com.project.service.AdminService;


@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	//add new admin
	@PostMapping("/admin/register")
	public Status register(@RequestBody Admin admin) {
		try {
			int id = adminService.register(admin);
	
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			return status;
			
		}catch(AdminServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
	@PostMapping("/admin/registerv2")
	public ResponseEntity<Status> registerv2(@RequestBody Admin admin) {
		try {
			int id = adminService.register(admin);
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			
			return new ResponseEntity<Status>(status, HttpStatus.OK);
				
		}
		catch(AdminServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("MyResponseHeader", "MyValue");
			
			return new ResponseEntity<Status>(status, responseHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/admin/login")
	public Status login(@RequestBody LoginDetails loginDetails) {
		try {
			Admin admin = adminService.loginv2(loginDetails.getEmail(), loginDetails.getPassword());
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(true);
			status.setMessageIfAny("Login Successfull");
			status.setCustomerId(admin.getId());
			status.setName(admin.getAdminName());
			
			return status;
			
		}catch(AdminServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	@GetMapping("/admin/fetch")
	public List<Admin> getAllAdmin(){
		return adminService.getAllAdmin();
	}
	
}