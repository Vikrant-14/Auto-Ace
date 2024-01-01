package com.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.FeedBack;
import com.project.exception.FeedBackServiceException;
import com.project.repository.FeedBackRepository;



@Service
public class FeedBackService {
	
	@Autowired
	private FeedBackRepository feebackRepository;

	public void comments(FeedBack feedback) {
		
		Optional<FeedBack> feedbackCheck = feebackRepository.findByEmail(feedback.getEmail());
		if(feedbackCheck.isEmpty()) {
			feebackRepository.save(feedback);
			
		}
		else
			throw new FeedBackServiceException("Feedback given");

	}
	
}