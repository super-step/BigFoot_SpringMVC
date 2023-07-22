package com.toes.footprint.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.toes.footprint.models.APIMarkDto;
import com.toes.footprint.models.SubDistDto;
import com.toes.footprint.service.APIMarkService;
import com.toes.footprint.service.SubDistService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class MapController {
	
	protected final SubDistService subDistService;
	protected final APIMarkService apiMarkService;
	
	

	public MapController(SubDistService subDistService, APIMarkService apiMarkService) {
		this.subDistService = subDistService;
		this.apiMarkService = apiMarkService;
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public String home(Model model) {
		
		return "home";
	}
	
	@RequestMapping(value = "/detail" , method=RequestMethod.GET)
	public String detail_map(Model model, String name) {
		model.addAttribute("NAME", name);
		model.addAttribute("BODY", "DETAIL_MAP");
		return "home";
	}
	
	@RequestMapping(value = "/map" , method=RequestMethod.GET)
	public String API_map(Model model, String name) {
		SubDistDto dto = subDistService.findByCode(name);
		model.addAttribute("SUBDIST", dto);
		model.addAttribute("BODY", "API_MAP");
		
		return "home";
	}
	
	@ResponseBody
	@RequestMapping(value = "/mark_list" , method=RequestMethod.GET)
	public List<APIMarkDto> markList(String name) {
		List<APIMarkDto> markList = apiMarkService.findBySdisCode(name);
		return markList;
	}
	
	
	
}
