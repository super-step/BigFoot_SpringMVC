package com.toes.footprint.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.toes.footprint.models.PostDto;

public interface PostDao {
	
	public List<PostDto> findByMkseq(@Param("sp_mkseq") long mk_seq);
	
	public PostDto findById(@Param("sp_seq") long sp_seq);
	
	// 아래부분의 메소드들은 모두 수정이 필요함.
//	@Select("SELECT * FROM tbl_bbs ORDER BY b_date DESC, b_time DESC ")
//	public List<PostDto> selectAll();	
//	
//	public List<PostDto> findUserSelectLimit();
//	
//	@Select(" SELECT * "
//			+ " FROM tbl_bbs"
//			+ "  LEFT JOIN tbl_user "
//			+ " 	ON b_username = username "
//			+ "	WHERE b_seq = #{seq}")
//	public PostDto findById(String sp_seq);
	public int insert(PostDto postDto);
}
