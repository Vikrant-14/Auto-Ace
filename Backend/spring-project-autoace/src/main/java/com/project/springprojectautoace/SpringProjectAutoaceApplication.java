package com.project.springprojectautoace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.project.entity")
public class SpringProjectAutoaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringProjectAutoaceApplication.class, args);
	}

}
