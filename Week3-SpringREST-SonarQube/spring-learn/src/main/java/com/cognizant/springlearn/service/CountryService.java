package com.cognizant.springlearn.service;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.Country;

@Service
public class CountryService {
	
	public Country getCountryIndia() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("countryIndia", Country.class);
		context.close();
		return country;
	}
}