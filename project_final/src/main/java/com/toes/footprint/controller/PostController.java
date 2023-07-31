package com.toes.footprint.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.toes.footprint.models.PostDto;
import com.toes.footprint.service.PostService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/posts")
public class PostController {
	
	protected final PostService postService;
	public PostController(PostService postService) {
		this.postService = postService;
	}

	// 마커를 선택했다고 가정하고 마커에 해당되는 json문자열을 리턴하는 메소드 제작
	// 마커를 선택하면 게시글 리스트 보여주기
	// "/postlist/{마커번호}"
	@ResponseBody
	@RequestMapping(value = "/postlist/{mk_seq}", method = RequestMethod.GET)
	public List<PostDto> selectPostList(
			@PathVariable("mk_seq") long mk_seq){
		log.debug("@@@@@@@@@@@@" + mk_seq);
		List<PostDto> postList = postService.findByMkseq(mk_seq);
		return postList;
	}
	
	// 게시글을 선택하면 게시글 자세히 보여주기
	// "/post/{게시글번호}"
	// public PostDto selectPost(long sp_seq)
	
	// 새 게시글을 작성할수 있어야 한다.
	// "/post/insert"
	// public void insertPost(PostDto dto)
	// 입력폼 & 데이터처리
	// 입력폼 이동은 없고, JavaScript로 화면 어딘가에 표현되는것으로 한다
	// 그래서 메소드는 구현하지 않는다
	
	// 새글에 대한 데이터가 넘어오면 처리하는 부분.
	@ResponseBody
	@RequestMapping(value = "/post/insert", method = RequestMethod.POST)
	public String insertPost(
			@ModelAttribute("POSTDTO") PostDto postDto, 
			MultipartHttpServletRequest sp_images,
			Model model) {
		log.debug("@@@@@@@@ : {}", postDto.toString());
		log.debug("imageList : {}", sp_images);
		postService.insert(postDto, sp_images);
		
		
		return "{\"result\" : \"OK\"}";
	}
	
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
	
	@ModelAttribute("POSTDTO")
	public PostDto newPostDto() {
		Date date = new Date(System.currentTimeMillis());
		Calendar calendar = Calendar.getInstance();

		// 현재날짜와 시간 getter 하기
		LocalDateTime localDateTime = LocalDateTime.now();
		
		// 날짜를 문자열로 변환하기 위한 pattern 생성
		DateTimeFormatter dateFormatter 
			= DateTimeFormatter.ofPattern("yyyy-MM-dd");
		// 시간을 문자열로 변환하기 위한 pattern 생성
		DateTimeFormatter timeFormatter
			= DateTimeFormatter.ofPattern("HH:mm:ss");
	
		// 날짜 형식의 데이터를 문자열로 변환
		String strDate = localDateTime.format(dateFormatter);
		// 시간 형식의 데이터를 문자열로 변환
		String strTime = localDateTime.format(timeFormatter);
		return PostDto.builder().sp_cdate(strDate).build();
	}
}
