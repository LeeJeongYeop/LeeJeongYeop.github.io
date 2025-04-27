---
layout: default
title: Resume
permalink: /
navigation: Resume
---

# {{site.title}}
*{{ site.email }}*

서버 백엔드 개발을 메인으로 대용량 트래픽 및 데이터 처리에 관심이 많습니다.  
회사와 팀에 도움이 되는 개발을 중요하게 생각하며, 사용자 중심의 문제 해결을 고민합니다.

<br>

<h3 class="section">Education</h3>

##### 남서울대학교 | 컴퓨터학과 전공 | 2010.03 - 2017.02
##### 수성고등학교 | 2007.03 - 2010.02

<br>

<h3 class="section">Experience</h3>

##### **Naver** | 2017.09 - 현재
-*Navercorp (Official Homepage - [Navercorp](https://www.navercorp.com/){:target="_blank"})*
- 크리에이터 서비스 개발 (플랫폼/결제/정산) / Back-end / 2023.09 - 현재
- 쇼핑 서비스 개발 (주문/장바구니) / Full-stack / 2019.10 - 2023.09
- 콘텐츠 중계 개발 (데이터 서빙) / Back-end / 2017.09 - 2019.10

##### **SEESO** | 2017.02 - 2017.06
-*SEESO (Official Homepage - [SEESO](http://seeso.kr/){:target="_blank"})*
- Full-stack

##### **INNOBOOSTRIA** | 2015.07 - 2016.01
-*INNOBOOST (Official Homepage - [INNOBOOST](http://www.innoboost.co.kr){:target="_blank"})*
- Full-stack

<br>

<h3 class="section">Project</h3>

##### **브랜드 커넥트 개발 및 운영 | Naver Creator | 2023.09 ~ 현재**
- 크리에이터/브랜드 협업 플랫폼(브랜드커넥트) **결제 및 환불 시스템 개발**
    - **결제/환불 DDD, EDA 기반 설계**
    - 분산락을 구성하여 중복 결제 방어
    - 예측 불가 이슈로 결제/환불 실패 시, 빠른 탐지 및 간결한 데이터 보정 환경을 구성하여 **결제 및 환불 누락 0건 유지**
    - 회계 대사 처리를 위한 결제 내역 및 정산 내역 설계 및 개발
- 쇼핑 연계 어필리에이트 서비스 **정산 개발** (쇼핑 커넥트)
    - 네이버 쇼핑 주문 로그와 네이버 파이낸셜 정산 내역을 사내 hive, trino 플랫폼으로 연계하여 정산 데이터 생성
    - 정산 누락 시, 집계 및 검증을 위한 **멱등성 보장 데이터 복구 환경 구성**
    - 크리에이터 이벤트 혜택에 필요한 정산 데이터 기반 **혜택 도메인 설계 및 개발**

##### **쇼핑 장바구니 운영 | Naver Shopping | 2020.03 ~ 2023.09**
- **예고 없는 대량의 트래픽 유입 대응 및 전략 구성**
    - k8s hpa 오토스케일링 튜닝 및 웜업 처리로 트래픽 급증 상황에 유연한 스케일링 처리
    - nginx ratelimit 을 통한 **초단위 급증 트래픽 대응**
    - 예시) 코로나 마스크 구입 진입 분당 20만 트래픽 대응, 포켓몬빵 대량 구매 진입, 기타 스마트스토어 이벤트 진행 상품 대량 담기 및 주문 요청
- 데이터 안정성 보장
    - **redis -> mongodb dual write를 통한 누락 없는 데이터 마이그레이션**
    - 담기 만료 상품에 대한 hard delete 방식에서 보관 기간 필터링을 통한 방식으로 개선
    - mongodb TTL을 통한 data size 관리로 hard delete 대체
- 장바구니 개수 조회 인스턴스 분리
    - **외부 제공 장바구니 개수 조회 및 기타 요약 정보 API 별도 인스턴스로 구성하여 장애 격리**
        - 장바구니 서비스 장애 시 외부 제공 API는 정상 대응 가능
        - 평시 3,300 TPS의 외부 제공 API의 메인 서버 부담 최소화
- 장바구니 페이지 조회 API 최적화
    - 사내 15개 api를 호출하여 장바구니 페이지 조회 API에서 사용
    - web client 비동기 호출 방식 최적화, arcus, ehache, circuitbreaker 적용을 통한 15개 중 하나의 실패에도 fallback 대응
    - **db 조회 및 15개 api를 호출하여도 400ms 이내의 응답 보장 유지**
- 재해 복구를 위한 인프라 HA 이중화
    - 사내 k8s와 GSLB 를 연계하여 Active-Active 인프라 구성
    - 분리된 리소스에 비례하여 클러스터 단위 리소스 최적화 및 오토스케일링 구성
    - 이중화로 인해 복잡해진 모니터링 대시보드 통합 개선

##### **한국 장바구니 개편 | Naver Shopping | 2020.04 - 2021.09**
- 네이버 쇼핑 내 별도 구성된 타팀의 장바구니 통합
- **타팀 CDC 이벤트를 kafka, nifi를 구성하여 subscribe 및 publising 데이터 마이그레이션**
    - 양방향 메시지로 타팀 DB <-> 우리팀 DB data sync
- **개편 작업 중 FE 전체 리팩토링 및 구성 변경**
    - PC/mobile 분리가 아닌 반응형 페이지로 통합
    - Recoil 도입으로 React 친화적인 글로벌 상태 관리 적용
    - 전체 페이지 CSR 적용 및 모니터링을 위한 Sentry 도입 및 구성
    - **docker image 레이어링을 통한 배포 속도 5배 향상**
- jdk 17 업데이트로 모던환경 구성
- 사용 기술: Java17, Spring Boot, Kafka, Nifi, React, Recoil

##### **글로벌 네이버쇼핑 주문/장바구니 개발 | Naver Shopping | 2020.04 - 2021.09**
- 네이버 쇼핑 글로벌 서비스 오픈을 위한 장바구니/주문 BE & FE 개발
- **백엔드 DDD, EDA 기반 설계 및 멀티 모듈 구성**
- FE 모노레포 구성 및 React SSR 대응을 위한 Next.js 적용
- k8s 서버환경 구성 및 kafka, nifi를 통한 EDA 구성
- jenkins, helm chart CI/CD 구성
- **부하테스트를 통한 pod 구성 최적화**
- 사용 기술: Java11, Spring Boot, Mongodb, nBase-T(mysql cluster), Redis, Kafka, Nifi, Typescript, React, Next.js

##### **쇼핑 장바구니 신규 개발 | Naver Shopping | 2019.10 - 2020.03**
- 네이버 페이에 구현된 장바구니 서비스를 네이버 쇼핑 내부 서비스로 신규 개발
- **React, GraphQL 기반 FE 프로젝트 전체 개발 및 BFF k8s 환경 세팅**
- redis 기반 api 서버 일부 참여
- 레거시 장바구에 비해 1.5배 빠른 랜더링 속도 개선 및 대량의 장바구니 상품에도 정상 응답 가능하도록 개선
- **oracle -> redis dual write 방식 통한 누락 없는 데이터 마이그레이션**
- jenkins, helm chart ci/cd 구성
- 부하테스트를 통한 pod 구성 최적화
- 사용 기술: Java11, Spring Boot, Redis, k8s, Nginx, Kafka, Typescript, React

##### **콘텐츠 중계 개발 | Naver | 2017.09 - 2019.03**
- 네이버 지식백과 서비스의 정보 데이터 모델링 및 서빙
- 다양한 콘텐츠 제공업체의 수천만건의 데이터 입수 및 갱신하는 배치 시스템 개발
- 지식백과의 다양한 데이터를 네이버 내부 스포츠 및 어학 관련 등 여러 팀으로 서빙
- 콘텐츠 중계 플랫폼 레거시 구조에서 지식백과 데이터 정제를 위한 모듈 분리 및 spring boot 기반으로 개선
- **추출 데이터 사이즈와 서버 메모리 상태를 고려한 스트림 작업**
- 사용 기술: Java, Spring, MySQL, iBatis

##### **단골공장 | SEESO | 2017.04 - 2017.06**
- [단골공장](https://www.dangolgongjang.com/){:target="_blank"} 웹 서비스
- DB & API 설계
- 이전 프로젝트에서 사용한 기술을 활용, FE 개발자와 협업을 위한 REST API 개발
- 사용 기술: Python, Django Rest Framework, MariaDB, AWS EC2, RDB, Nginx

##### **동구밭 | SEESO | 2017.02 - 2017.04**
- [동구밭](https://www.donggubat.com/){:target="_blank"} 웹 서비스
- 발달장애인이 만드는 제품을 판매하는 쇼핑몰 서비스 개발
- DB & API 설계 및 jquery를 통한 FE 개발
- 촉박한 기간과 1인 개발이라 기간 연장이 불가피했지만, 풀스택 프레임워크를 사용하여 기간 안에 서비스 오픈에 성공
- 사용 기술: Python, Django, MariaDB, Javascript, jQuery, AWS EC2, RDB, Nginx

##### **INNOBOOSTRIA | INNOBOOST | 2015.07 - 2016.01**
- 사내 업무 솔루션 및 스케줄관리, HR, 재무관리 시스템 개발
- DB 설계, API 개발, 화면 개발
- IDC 서버 입고 후 온프레미스 서버 환경 구성
- 사용기술: Python, Django, JavaScript, jQuery, MariaDB

<br>

<h3 class="section">Skills &amp; Expertise</h3>

##### Back-end
- Java, Javascript, Python
- Spring Boot, Next.js, Express, Django
- JPA, QueryDSL, Hibernate, TypeORM, Django ORM
- MySQL/MariaDB, PostgreSQL, MongoDB, Redis, Kafka

##### DevOps
- Kubernetes, Docker
- Nginx, Tomcat, Netty, uWSGI
- AWS(EC2, RDB, S3, Code Deploy *etc*..)

##### Front-end
- Javascript, Typescript
- React, jQuery, Next.js, Apollo
- Recoil, Redux
- Webpack
