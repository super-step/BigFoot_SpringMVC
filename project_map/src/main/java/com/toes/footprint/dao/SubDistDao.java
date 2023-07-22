package com.toes.footprint.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.toes.footprint.models.SubDistDto;

public interface SubDistDao {
	
	@Select("SELECT * FROM tb_subdist")
	public List<SubDistDto> selectAll();
	
	@Select("SELECT * FROM tb_subdist WHERE sdis_code = #{code}")
	public SubDistDto findByCode(String code);
	
	
	
	
}
