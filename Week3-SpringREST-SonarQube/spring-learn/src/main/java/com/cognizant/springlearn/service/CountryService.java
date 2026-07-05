package com.cognizant.springlearn.service;

import java.util.ArrayList;
import java.util.List;

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
	
	public Country getCountry(String code) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		
		@SuppressWarnings("unchecked")
		List<Country> countries = context.getBean("countries", ArrayList.class);
		
		Country foundCountry = null;
		
		for (Country country : countries) {
			if (country.getCode().equalsIgnoreCase(code)) {
				foundCountry = country;
				break;
			}
		}
		
		context.close();
		return foundCountry;
	}
}