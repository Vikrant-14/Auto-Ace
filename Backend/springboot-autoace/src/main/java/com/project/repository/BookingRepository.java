package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
