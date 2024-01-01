package com.project.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.ServiceTable;

import com.project.repository.ServiceRepository;

@Service
public class Services {
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	public List<ServiceTable> getAllServices() {
        return serviceRepository.findAll();
    }
	
//	serviceRepository.
	
}
