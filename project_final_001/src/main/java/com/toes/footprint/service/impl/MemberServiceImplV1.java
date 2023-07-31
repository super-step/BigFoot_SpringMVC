package com.toes.footprint.service.impl;

import org.springframework.stereotype.Service;

import com.toes.footprint.dao.MemberDao;
import com.toes.footprint.models.MemberDto;
import com.toes.footprint.service.MemberService;

@Service
public class MemberServiceImplV1 implements MemberService {

	protected final MemberDao memberDao;

	public MemberServiceImplV1(MemberDao memberDao) {
		super();
		this.memberDao = memberDao;
	}

//	테이블 자동 생성 메서드 
//	@Autowired
//	public void creat_member_table() {
//		memberDao.creat_member_table(null);
//	}

//	회원가입메서드. 관리자 안넣기로 함
	@Override
	public int join(MemberDto memberDto) {
		return memberDao.insert(memberDto);
	}

	@Override
	public MemberDto login(MemberDto memberDto) throws Exception {

//		사용자가 있는지 확인
		MemberDto resultDto = memberDao.findById(memberDto.getMb_id());

//		아이디가 없을 경우
		if (resultDto == null) {
			throw new Exception("NOTID");
//			아이디는 있는데 패스워드가 틀린경우-> 이거 솔직히 아직도 이해 안감
//			memberDto에서 모든  PASSWORD를 뒤지는건가? 그리고 resultDto 에
//			PASSWORD를 저장한 적도 없잖아
		} else {
			if (resultDto != null && !resultDto.getMb_password().equals(memberDto.getMb_password())) {
				throw new Exception("NOTPASSWORD");
			}
		}
		return resultDto;
	}

	@Override
	public MemberDto findIdByEmail(MemberDto memberDto) throws Exception {
//	db에 저장된 값과 일치하는지 그리고 일치한다면 각 메세지를 반환하고자한다.
//		이중에서 이름과 이메일 정보가 일치한다면 password도 반환하고자 한다

//		memberDTO는 매개변수이기 때문에 INPUT TAG에서 입력한 값이 들어간다

		MemberDto resultDto = memberDao.findById(memberDto.getMb_id());
		if (resultDto == null) {
			
			throw new Exception("NOTID");
			
		} else if (resultDto != null && !resultDto.getMb_email().equals(memberDto.getMb_email())) {
			throw new Exception("NOTEMAIL");
		}
		else if (resultDto != null && resultDto.getMb_email().equals(memberDto.getMb_email())) {
			return resultDto;
//			이건 dto값을 넘겨야 했는데 에러메세지만 넘겨주니 값이 출력되지 않았다 else if에서 조건이 만족됐다면 resultDto 값이 넘겨진줄 알았으나
//			사실은 밑의 문자열 에러값만 넘겨졌던 것이다
//			throw new Exception("EMAIL");
		}
		return null;
	}

	@Override
	public MemberDto findById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	
	
	@Override
	public MemberDto findByPassword(String password) {
		return memberDao.findByPassword(password);
	}

//	  회원을 등록할 때 새로운 코드를 생성해 memberDto에 업데이트고 회원정보 insert 하기

	@Override
	public int insert(MemberDto memberDto) throws Exception {
//		아이디 중복 방지 코드
		String id = memberDto.getMb_id();
		MemberDto resultDtoid = memberDao.findid(id);
		if (resultDtoid != null) {
			throw new Exception("ID");
		}

//		이름과 전화번호가 중복되지 않게 하는 코드. .trim() 을 붙여서 빈칸 제거 필요
		String tel = memberDto.getMb_tel().trim();
		String name = memberDto.getMb_name().trim();
		MemberDto resultDtotelname = memberDao.findnameandtel(name, tel);
//		만약 중복됐다면
		if (resultDtotelname != null) {
			throw new Exception("NAME_TEL");
		}

//		닉네임이 중복되지 않게 하는코드
		String nickname = memberDto.getMb_nick().trim();
		MemberDto resultDtonickname = memberDao.findnickname(nickname);
		if (resultDtonickname != null) {
			throw new Exception("NICKNAME");
		}

//		이메일이 중복되지 않게 하는코드		
		String email = memberDto.getMb_email().trim();
		MemberDto resultDtoemail = memberDao.findemail(email);
		if (resultDtoemail != null) {
			throw new Exception("EMAIL");
		}

		return memberDao.insert(memberDto);
	}

// tb_member 를 조회해 새로운 고객코드를 생성하는 메서드- 안쓰는 중
	@Override
	public String getNewCode() {
		String mCode = memberDao.getMaxMcode();
		String newCode = "00001";
		if (mCode != null) {
			String.format("%06d", Integer.valueOf(mCode) + 1);
		}
		return null;// newCode;
	}

	@Override
	public MemberDto findtoid(MemberDto memberDto) {

//		if(resultDto.getMb_email().equals(resultDto.getMb_email()))	
		return null;
	}
	@Override
	public int update(MemberDto memberDto) {
		return memberDao.update(memberDto);
	}

}
