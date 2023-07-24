package com.toes.footprint.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.toes.footprint.service.SubDistService;

import lombok.extern.slf4j.Slf4j;

/**
 * Handles requests for the application home page.
 */
@Slf4j
@Controller
public class HomeController {



	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		log.debug("시작이니?");
		return "home";
	}
	

}
