package com.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Booking;
import com.project.entity.Customer;
import com.project.entity.ServiceTable;
import com.project.exception.BookingException;
import com.project.repository.BookingRepository;
import com.project.repository.CustomerRepository;
import com.project.repository.ServiceRepository;

import jakarta.transaction.Transactional;



@Service
@Transactional
public class BookingService{

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    public Booking bookService(Booking booking, int customerId, int serviceId) {
        Optional<Customer> existingCustomer = customerRepository.findById(customerId);
        Optional<ServiceTable> existingService = serviceRepository.findById(serviceId);

        if (existingCustomer.isPresent() && existingService.isPresent()) {
            booking.setCustomer(existingCustomer.get());
            booking.setServiceTable(existingService.get());

            Booking savedBooking = bookingRepository.save(booking);

            return savedBooking;
        } else {
            throw new BookingException("Customer or Service does not exist");
        }
    }
}
