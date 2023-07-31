package com.toes.footprint.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostDto {
	private long sp_seq;//	BIGINT
	private String sp_title;//	VARCHAR(30)
	private String sp_content;//	VARCHAR(400)
	private String sp_cdate;//	VARCHAR(10)
	private String sp_mdate;//	VARCHAR(10)
	private long sp_mkseq;//	BIGINT
	private long sp_mbseq;//	BIGINT
	
	private List<FileDto> sp_imgs;
	
}
