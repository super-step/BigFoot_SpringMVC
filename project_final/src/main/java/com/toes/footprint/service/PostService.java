package com.toes.footprint.service;

import java.util.List;

import com.toes.footprint.models.PostDto;

public interface PostService {

	public List<PostDto> findByMkseq(long mk_seq);

}
