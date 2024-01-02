package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Booking;
import com.project.entity.Contact;
import com.project.entity.Customer;
import com.project.entity.ServiceTable;
import com.project.exception.BookingException;
import com.project.exception.ContactException;
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

    //Adding Booking
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
    
    // Fetching all Service 
    public List<Booking> getAllBooking() {
    	return bookingRepository.findAll();
    }
    
    //fetch booked services by customer id
    public List<Booking> getBookingById(int customerId) {
    	return bookingRepository.findByCustomerId(customerId);
    }
    
    
    //delete by id
    public void deleteBookService(int bookingId) {
        // Check if the contact exists
        Booking existingBooking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new BookingException("bookingId not found "));

        // Delete the contact
        bookingRepository.delete(existingBooking);
	}
}
