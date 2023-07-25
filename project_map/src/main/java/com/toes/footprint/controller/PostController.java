package com.toes.footprint.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/posts")
public class PostController {
	
	
	
	// 마커를 선택하면 게시글 리스트 보여주기
	// "/postlist/{마커번호}"
	// public List<PostDto> selectPostList(long mk_seq)
	
	// 게시글을 선택하면 게시글 자세히 보여주기
	// "/post/{게시글번호}"
	// public PostDto selectPost(long sp_seq)
	
	// 새 게시글을 작성할수 있어야 한다.
	// "/post/insert"
	// public void insertPost(PostDto dto)
	// 입력폼 & 데이터처리
	
	// 내 게시글을 변경할수 있어야 한다.
	// "/post/{게시글번호}/update
	// 입력폼 & 데이터처리
	
	// 내 게시글은 삭제할 수 있어야 한다.
	// "/post/{게시글번호}/delete
	
	// 댓글을 볼수 있어야 한다.
	// 게시글을 보여줄때 댓글리스트도 함께 호출
	
	// 댓글을 달수 있어야 한다.
	// "/comment/{타켓회원}/input
	// 입력폼 & 데이터처리
	
	// 내 댓글은 수정할 수 있어야 한다.
	// "/comment/{댓글번호}/update
	// 입력폼 & 데이터처리
	
	// 내 댓글은 삭제 할 수 있어야 한다.
	// "/comment/{댓글번호}/delete
}
