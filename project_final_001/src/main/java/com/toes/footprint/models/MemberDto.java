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
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDto {
	private long mb_seq;//	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
	private String mb_id;//	VARCHAR(30)	NOT NULL,	
	private String mb_password;//	VARCHAR(100)	NOT NULL,	
	private String mb_nick;//	VARCHAR(10)	NOT NULL,	
	private String mb_proimg;//	VARCHAR(100),		
	private String mb_name;//	VARCHAR(20)	NOT NULL,	
	private String mb_birth;//	VARCHAR(10)	NOT NULL,	
	private String mb_tel;//	VARCHAR(12)	NOT NULL,	
	private String mb_email;//	VARCHAR(40)	NOT NULL,	
	private String mb_addr;//	VARCHAR(200)		


	
}
