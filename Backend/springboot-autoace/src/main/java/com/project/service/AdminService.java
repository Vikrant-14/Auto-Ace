package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Admin;
import com.project.exception.AdminServiceException;
import com.project.repository.AdminRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminService {
	@Autowired
	private AdminRepository adminRepository;
	
	//Customer registration
	public int register(Admin admin) {
		
		Long count = adminRepository.findIfAdminExists(admin.getEmail());
		System.out.println(count);
		if(count == 1)
			throw new AdminServiceException("Admin already registered!");
		else {
			adminRepository.save(admin);
			return admin.getId();
		}
	}
	
	//Customer Login
	public Admin loginv2(String email, String password) {
		Long count = adminRepository.findIfAdminIsPresent(email, password);
		if(count == 0)
			throw new AdminServiceException("Invalid Email/Password");
		else {
			return adminRepository.findByEmail(email).get();
		}
	}

	public List<Admin> getAllAdmin() {
		// TODO Auto-generated method stub
		return adminRepository.findAll();
	}
}
