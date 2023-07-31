package com.toes.footprint.service;

import java.util.List;

import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.toes.footprint.models.PostDto;

public interface PostService {

	public List<PostDto> findByMkseq(long mk_seq);

	int insert(PostDto postDto, MultipartHttpServletRequest sp_images);

}
