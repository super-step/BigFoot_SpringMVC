package com.toes.footprint.service;

import java.util.List;

import com.toes.footprint.models.SubDistDto;

public interface SubDistService {
	public List<SubDistDto> SelectAll();
	public SubDistDto findByCode(String code);
}
