package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.LoginDetails;
import com.project.dto.LoginStatus;
import com.project.dto.RegistrationStatus;
import com.project.dto.Status;
import com.project.entity.Customer;
import com.project.exception.CustomerServiceException;
import com.project.service.CustomerService;

@RestController
@CrossOrigin
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	
	@PostMapping("/customer/register")
	public Status register(@RequestBody Customer customer) {
		try {
			int id = customerService.register(customer);
	
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			return status;
			
		}catch(CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
	@PostMapping("/customer/registerv2")
	public ResponseEntity<Status> registerv2(@RequestBody Customer customer) {
		try {
			int id = customerService.register(customer);
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setCustomerId(id);
			
			return new ResponseEntity<Status>(status, HttpStatus.OK);
				
		}
		catch(CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("MyResponseHeader", "MyValue");
			
			return new ResponseEntity<Status>(status, responseHeaders, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/customer/login")
	public Status login(@RequestBody LoginDetails loginDetails) {
		try {
			Customer customer = customerService.loginv2(loginDetails.getEmail(), loginDetails.getPassword());
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(true);
			status.setMessageIfAny("Login Successfull");
			status.setCustomerId(customer.getId());
			status.setName(customer.getName());
			
			return status;
			
		}catch(CustomerServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
	
}
