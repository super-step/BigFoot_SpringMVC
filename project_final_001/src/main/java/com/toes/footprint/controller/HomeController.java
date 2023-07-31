package com.toes.footprint.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.toes.footprint.models.MemberDto;

import lombok.extern.slf4j.Slf4j;

/**
 * Handles requests for the application home page.
 */
@Slf4j
@Controller
public class HomeController {



	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpSession httpSession) {
		MemberDto getSession = (MemberDto)httpSession.getAttribute("PUTMEMBER");
		log.debug("@@@@@@@@ : {}", getSession);
		if (getSession != null) {
			log.debug("*********홈화면 로그인 되어있음 {}",getSession.toString());
		} else {
			log.debug("*********홈화면 로그인 안되어 있음");
		}
		return "home";
	}
	

}
