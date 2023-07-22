package com.toes.footprint.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.toes.footprint.dao.APIMarkDao;
import com.toes.footprint.models.APIMarkDto;
import com.toes.footprint.service.APIMarkService;

@Service
public class APIMarkServiceImplV1 implements APIMarkService {
	
	protected final APIMarkDao apiMarkDao;
	
	
	public APIMarkServiceImplV1(APIMarkDao apiMarkDao) {
		super();
		this.apiMarkDao = apiMarkDao;
	}


	@Override
	public List<APIMarkDto> findBySdisCode(String sdiscode) {
		
		return apiMarkDao.findBySdisCode(sdiscode);
	}

}
