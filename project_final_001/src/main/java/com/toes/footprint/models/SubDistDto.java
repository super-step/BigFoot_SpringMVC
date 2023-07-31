package com.toes.footprint.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class SubDistDto {
	private String sdis_code;		//	VARCHAR(18)		PRIMARY KEY
	private String sdis_name;		//	VARCHAR(10)	NOT NULL	
	private String sdis_lati;		//	VARCHAR(14)	NOT NULL	
	private String sdis_longi;		//	VARCHAR(14)	NOT NULL	
	private int sdis_zoomlv;		//	INT	NOT NULL	
	private String sdis_discode;	//	VARCHAR(4)	NOT NULL	
}
