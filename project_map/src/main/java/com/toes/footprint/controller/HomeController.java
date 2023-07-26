package com.toes.footprint.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.toes.footprint.service.SubDistService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {



	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		return "home";
	}
	

}
