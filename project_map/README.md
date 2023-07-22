# Spring Project
- Spring Legacy Project > Spring MVC Project 생성
- views/home.jsp 삭제 후 다시 작성

# pom.xml 수정
- java version 을 11 로 변경
- spring framework 5.2.24 로 변경
- slf4j 1.7.36 으로 변경

- maven-compiler-plugin java 버전 property로 변경
- lombok 설정
- logback 설정

# pom.xml 수정(DB관련)
- spring-jdbc
- mybatis
- mybatis-spring
- mysql-connector-j
- mysql-connector-java
```xml
		<!-- spring-jdbc -->
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-jdbc</artifactId>
			<version>${org.springframework-version}</version>
		</dependency>

		<!-- mybatis -->
		<dependency>
			<groupId>org.mybatis</groupId>
			<artifactId>mybatis</artifactId>
			<version>3.5.13</version>
		</dependency>

		<!-- mybatis-spring -->
		<dependency>
			<groupId>org.mybatis</groupId>
			<artifactId>mybatis-spring</artifactId>
			<version>3.0.0</version>
		</dependency>

		<!-- mysql-connector-j -->
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<version>8.0.33</version>
		</dependency>

		<!-- commons-dbcp2 -->
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-dbcp2</artifactId>
			<version>2.9.0</version>
		</dependency>


		<!-- mysql-connector-java -->
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<version>8.0.33</version>
		</dependency>
```

# mybatis-context
```xml
	<bean id="ds" class="org.apache.commons.dbcp2.BasicDataSource" >
		<property name="driverClassName" value="com.mysql.cj.jdbc.Driver" />
		<property name="url" value="jdbc:mysql://localhost:3306/mycarDB"/>
		<property name="username" value="root" />
		<property name="password" value="!Biz8080" />
	</bean>
	
	<!-- SqlSessionFactoryBean  -->
	<!-- Dto 클래스 저장 패키지, mapper 폴더 -->
	<bean class="org.mybatis.spring.SqlSessionFactoryBean" id = "sessionFactory">
		<property name="dataSource" ref="ds" />
		<property name="typeAliasesPackage" value="com.callor.car.model"  />
		<property name="mapperLocations" value="/WEB-INF/spring/mapper/*-mapper.xml" />
	</bean>
	
	<!-- SqlSessionTemplate -->
	<bean class="org.mybatis.spring.SqlSessionTemplate" >
		<constructor-arg ref="sessionFactory" />
	</bean>
	
	<!-- mybatis-scan -->
	<mybatis-spring:scan base-package="com.callor.car.persistance"/>
	
	
	<!-- tx -->
	<tx:annotation-driven/>
	<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
		<property name="dataSource" ref="ds" />
	</bean>
```

