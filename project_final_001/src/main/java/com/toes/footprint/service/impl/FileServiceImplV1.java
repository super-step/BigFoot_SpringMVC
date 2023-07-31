package com.toes.footprint.service.impl;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.toes.footprint.models.FileDto;
import com.toes.footprint.service.FileService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImplV1 implements FileService{

	protected final String windowsPath;
	protected final String winPath;
	protected final String macHome;
	protected final String macPath;
	
	
	
	public FileServiceImplV1(String windowsPath, String winPath, String macHome, String macPath) {
		this.windowsPath = windowsPath;
		this.winPath = winPath;
		this.macHome = macHome;
		this.macPath = macPath;
	}
	
	@Override
	public String fileUp(MultipartFile file) throws Exception {
		
		log.debug("win Path : {}", winPath);
		log.debug("mac Path : {}", macPath);
		
		String fileUpPath = macHome + macPath;
		File path = new File(windowsPath);
		if(path.exists()) {
			fileUpPath = winPath;
		}
		
		log.debug("Up folder {} ", fileUpPath);
		// 만약 System 에 Upload할 path 가 없으면 생성하라
		path = new File(fileUpPath);
		if( !path.exists() ) {
			path.mkdirs();
		}
		
		// 실제 업로드될 파일 이름
		String fileName = file.getOriginalFilename();
		
		// Java 제공하는 UUID 생성하는 코드
		String strUUID = UUID.randomUUID().toString();
		// image.jpg0000-0000-0000
		
		// UUID 키값을 파일이름 앞에  부착하여 새로운 이름으로 변형
		fileName = String.format("%s-%s", strUUID, fileName);
		
		File upLoadFile = new File(fileUpPath, fileName);
		file.transferTo(upLoadFile);
		return fileName;

	}

	@Override
	public List<FileDto> filesUp(MultipartHttpServletRequest files) throws Exception {
		/*
		 * 멀티파일을 각 파일로 분리하여 fileUp() 에게 파일을 업로드 하도록
		 * 요청하고, 원본이름과 변경된 이름을 받아서 returnFiles 를 만들기
		 */
		List<MultipartFile> fileList = files.getFiles("sp_images");
		
		List<FileDto> returnFiles = new ArrayList<FileDto>();
		for(MultipartFile file : fileList) {
			
			FileDto fileDto = FileDto
					.builder()
					.spi_originuri(file.getOriginalFilename())
					.spi_uploaduri(this.fileUp(file))
					.spi_cdate(newDate()).build();
			
			
			returnFiles.add(fileDto);
		}
		return returnFiles;
	}

	@Override
	public String delete(String fileName) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public String newDate() {
		LocalDateTime localDateTime = LocalDateTime.now();
		DateTimeFormatter dateFormatter 
			= DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String strDate = localDateTime.format(dateFormatter);
		return strDate;
	}
	
}
