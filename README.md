# 버전 정리

## java-version : 11
### jdk 
1. 15 version 다운
2. sts들어있는 폴더 STS.init sublime 으로 열기
3. openFile 밑에 줄에 jdk 경로 저장 (\을 /으로 변경하기)
```
-vm
C:/jdk15파일안 bin파일 경로/bin
```
## SpringFrameWork 버전 : 5.2.24.RELEASE
## slf4j 버전 : 1.7.36
- java.util.logging, logback 및 log4j와 같은 다양한 로깅 프레임 워크에 대한 추상화(인터페이스) 역할을 하는 라이브러리
## logback 버전 : 1.12.12 (scope tag 삭제 필요)
## lombok 버전 : 1.18.28
## jackson : 2.15.2
- Java Object를 JSON으로 변환하거나 JSON을 Java Object로 변환하는데 사용할 수 있는 Java 라이브러리



# DB 연동을 위한 Dependency
## Spring JDBC : ${org.springframework-version} 으로 Spring Framework 와 연동 (5.2.24.RELEASE)
## DBCP2 (Database Connection Pool) : 2.9.0
- 요청이 올때마다 Connection 객체를 얻는 것이 아닌, 미리 일정 갯수 찍어내서 Connection Pool 로 관리하는 것
## mybatis : 3.5.13
- JDBC를 통해 데이터베이스에 엑세스하는 작업을 캡슐화하고 일반 SQL 쿼리, 저장 프로 시저 및 고급 매핑을 지원하며 모든 JDBC 코드 및 매개 변수의 중복작업을 제거
- 프로그램에 있는 SQL쿼리들을 한 구성파일에 구성하여 프로그램 코드와 SQL을 분리할 수 있는 장점
## mybatis-spring : 3.0.0
- MyBatis를 Spring Framework에 녹여 더 쉽게 사용할 수 있게 하기 위한 연동 모듈
## ojdbc8 : 23.2.0.0
- oracle 에서 제공하는 오라클 DB를 관리할 수 있도록 도와주는 JDBC

