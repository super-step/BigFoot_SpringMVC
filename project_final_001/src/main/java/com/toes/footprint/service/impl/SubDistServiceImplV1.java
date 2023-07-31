package com.toes.footprint.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.toes.footprint.dao.SubDistDao;
import com.toes.footprint.models.SubDistDto;
import com.toes.footprint.service.SubDistService;

@Service
public class SubDistServiceImplV1 implements SubDistService {

	protected final SubDistDao districtDao;
	
	public SubDistServiceImplV1(SubDistDao districtDao) {
		super();
		this.districtDao = districtDao;
	}

	@Override
	public List<SubDistDto> SelectAll() {
		return districtDao.selectAll();
	}

	@Override
	public SubDistDto findByCode(String code) {
		return districtDao.findByCode(code);
	}


	
}
