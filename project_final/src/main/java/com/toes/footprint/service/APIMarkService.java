package com.toes.footprint.service;

import java.util.List;

import com.toes.footprint.models.APIMarkDto;

public interface APIMarkService {
	public List<APIMarkDto> findBySdisCode(String sdiscode);
}
