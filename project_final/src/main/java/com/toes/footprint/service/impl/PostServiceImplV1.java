package com.toes.footprint.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.toes.footprint.dao.PostDao;
import com.toes.footprint.models.PostDto;
import com.toes.footprint.service.PostService;

@Service
public class PostServiceImplV1 implements PostService{

	protected final PostDao postDao;
	public PostServiceImplV1(PostDao postDao) {
		this.postDao = postDao;
	}


	@Override
	public List<PostDto> findByMkseq(long mk_seq) {
		return postDao.findByMkseq(mk_seq);
	}
	
}
