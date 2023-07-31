package com.toes.footprint.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.toes.footprint.models.FileDto;

public interface FileDao {
	public int insert(
		@Param("list") List<FileDto> files, 
		@Param("spi_spseq") long spi_spseq);
	
	public List<FileDto> selectAll();
	
	@Select(" SELECT * FROM tb_snsimg WHERE spi_seq = #{spi_seq} ")
	public FileDto findByid(long spi_seq);
	
	// 게시판과 연결할때 사용할 method
	@Select(" SELECT * FROM tb_snsimg WHERE spi_spseq = #{spi_spseq} ")
	public List<FileDto> findByBSeq(long spi_spseq);

	@Delete(" DELETE FROM tb_snsimg WHERE spi_seq = #{spi_seq} ")
	public int delete(long spi_seq);
}
