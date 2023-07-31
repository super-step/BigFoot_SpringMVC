package com.toes.footprint.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.toes.footprint.models.MemberDto;

public interface MemberDao {
	
//	@@@@@@@@@@테이블생성@@@@@@@@@@@@@@
	
//	맴버테이블 생성 
	public void creat_member_table(String dumy);
	
//	@@@@@@@@@@@로그인@@@@@@@@@@@@@
	
//	가장 최근에 만들어진 아이디 호출
	@Select("SELECT MAX(mb_seq) FROM tb_member")
	public String getMaxMcode();

//	리턴값이 dto인 select문은 pk값으로 검색했을 시 그에 따른 다른 칼럼값도 가져와져서 dto에 저장된다.
//	dto이름이 그래서 칼럼과 같아야 함
	
//	로그인 아이디 찾기 
	@Select(" SELECT * FROM tb_member WHERE mb_id = #{id} ")
	public MemberDto findById(String id);

//	로그인 비밀번호 찾기 -> 사용안함
	@Select("SELECT * FROM tb_member WHERE mb_password = #{password} ")
	public MemberDto findByPassword(String password);
	
	@Select("SELECT * FROM tb_member WHERE mb_password = #{email} ")
	public MemberDto findByemail(String email);

//	mapper에서 생성함 . 모달에서 아이디를 찾는 코드
//	@Select("SELECT * FROM tb_member WHERE mb_email =#{email}")
//	public MemberDto findByEmail(String email);
	
//		아이디와 비밀번호를 가져오는 코드
	@Select("SELECT * FROM tb_member WHERE mb_id = #{id} AND mb_password = #{password}  ")
	public MemberDto findidpassword(@Param("id") String name, @Param("password")String password);
	
	
	
	
//	@@@@@@@회원가입@@@@@@@@
	
	
	
	
//  회원가입 입력
	public int insert(MemberDto memberDto);
	
//	회원가입 아이디 중복방지
	@Select("SELECT * FROM tb_member WHERE mb_id = #{id} ")
	public MemberDto findid(String id);

//	회원가입 이름과 전화 중복방지
	@Select("SELECT * FROM tb_member WHERE mb_name = #{name} AND mb_tel = #{tel}  ")
	public MemberDto findnameandtel(@Param("name") String name, @Param("tel")String tel);

//  회원가입 닉네임 중복방지
	@Select("SELECT * FROM tb_member WHERE mb_nick = #{nickname} ")
	public MemberDto findnickname(String nickname);

//	회원가입 이메일 중복방지
	@Select("SELECT * FROM tb_member WHERE mb_email = #{email}")
	public MemberDto findemail(String email);

	
	
	
	
	
	
//	마이페이지
	public int update(MemberDto memberDto);

	
}
