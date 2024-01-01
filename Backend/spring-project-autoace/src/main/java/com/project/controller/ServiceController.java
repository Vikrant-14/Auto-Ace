package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.ServiceTable;
import com.project.service.Services;


@RestController
@CrossOrigin
public class ServiceController {
	
	@Autowired
	private Services services;
	
	@PostMapping("/admin/addService")
	public void addService(@RequestBody ServiceTable service) {
		
	}
	
	
	@GetMapping("/fetchService")
	public ServiceTable fetchService(){
		List<ServiceTable> list =  services.getAllServices();
		
		ServiceTable ser = new ServiceTable();
		for(ServiceTable s: list) {
			ser.setName(s.getName());
		}
		
		return ser;
	}
	
	
	
	
	
}