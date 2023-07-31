package com.toes.footprint.models;

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
public class PostImgDto {
	private long spi_seq;//	BIGINT
	private String spi_uri;//	VARCHAR(100)
	private String spi_cdate;//	VARCHAR(10)
	private long spi_spseq;//	BIGINT
}
