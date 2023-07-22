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
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class APIMarkDto {
	private long mk_seq;//	bigint
	private String mk_name;//	varchar(30)
	private String mk_lati;//	varchar(14)
	private String mk_longi;//	varchar(14)
	private int mk_type;//	int
	private String mk_sdiscode;//	varchar(18)
}
