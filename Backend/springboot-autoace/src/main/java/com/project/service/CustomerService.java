package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Customer;
import com.project.exception.CustomerServiceException;
import com.project.repository.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	
	//Customer registration
	public int register(Customer customer) {
		
		Long count = customerRepository.findIfCustomerExists(customer.getEmail());
		System.out.println(count);
		if(count == 1)
			throw new CustomerServiceException("Customer already registered!");
		else {
			customerRepository.save(customer);
			return customer.getId();
		}
	}
	
	//Customer Login
	public Customer loginv2(String email, String password) {
		Long count = customerRepository.findIfCustomerIsPresent(email, password);
		if(count == 0)
			throw new CustomerServiceException("Invalid Email/Password");
		else {
			return customerRepository.findByEmail(email).get();
		}
	}
	
	//fetch Customer
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}
	
}
