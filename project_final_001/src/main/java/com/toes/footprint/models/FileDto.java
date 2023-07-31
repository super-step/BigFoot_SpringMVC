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
public class FileDto {
	private long spi_seq;//	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
	private String spi_originuri;//	VARCHAR(100)	NOT NULL,	
	private String spi_uploaduri;//	VARCHAR(100)	NOT NULL,	
	private String spi_cdate;//	VARCHAR(10)	NOT NULL,	
	private long spi_spseq;//	BIGINT	NOT NULL	
}
