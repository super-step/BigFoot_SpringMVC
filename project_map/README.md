# 프로젝트 시작
## 프로젝트 초기 설정
### pom.xml 파일 설정
2. lombok
3. logback 2. slf4j
4. mybatis
5. spring jdbc
6. dbcp2
7. mybatis
8. mybatis-spring
10. mysql-connector / j


4. jackson

11. commons-fileupload



9. ojdbc8


### web.xml 설정
1. 한글깨짐 필터설정
2. `*-context.xml` 설정

### root-conext.xml
1. 업로드 파일 크기를 결정한다.

### servlet-context.xml
1. 정적파일 설정
2. controller, service.impl 각각 로드하게 설정. (성능이슈)

### mybatis-context.xml
1. db 연결관련 각종 설정. (dao관련 설정 포함) (`*-mapper.xml`)

### fileup-context.xml
1. 파일 업로드 path 설정
