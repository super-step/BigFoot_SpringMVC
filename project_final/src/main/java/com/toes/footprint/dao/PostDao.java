package com.toes.footprint.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.toes.footprint.models.PostDto;

public interface PostDao {
	
	public List<PostDto> findByMkseq(@Param("sp_mkseq") long mk_seq);
}
