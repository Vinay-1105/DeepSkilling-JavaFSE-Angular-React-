package com.cognizant.springlearn;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		LOGGER.info("START - main method");
		
		SpringApplication.run(SpringLearnApplication.class, args);
		
		displayDate();
		
		LOGGER.info("END - main method");
	}

	public static void displayDate() {
		LOGGER.info("START - displayDate method");
		
		try {
			ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
			
			SimpleDateFormat dateFormat = context.getBean("dateFormat", SimpleDateFormat.class);
			LOGGER.debug("SimpleDateFormat bean loaded: {}", dateFormat.toPattern());
			
			String dateString = "31/12/2018";
			Date parsedDate = dateFormat.parse(dateString);
			
			LOGGER.debug("Parsed date: {}", parsedDate);
			LOGGER.info("Date string '{}' parsed successfully to: {}", dateString, parsedDate);
			
			context.close();
			
		} catch (Exception e) {
			LOGGER.error("Error parsing date", e);
		}
		
		LOGGER.info("END - displayDate method");
	}
}