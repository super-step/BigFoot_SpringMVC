package com.toes.footprint.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentDto {
	private long sc_spseq;//	BIGINT
	private long sc_mbseq;//	BIGINT
	private String sc_tnick;//	VARCHAR(10)
	private String sc_content;//	VARCHAR(200)
	private String sc_cdate;//	VARCHAR(10)
	private String sc_mdate;//	VARCHAR(10)
}
