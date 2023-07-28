package com.toes.footprint.dao;

import java.util.List;

import com.toes.footprint.models.APIMarkDto;

public interface APIMarkDao {
	
	
	public List<APIMarkDto> findBySdisCode(String sdiscode);
	
	
	
	
}
