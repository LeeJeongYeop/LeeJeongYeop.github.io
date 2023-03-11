## Dependency
ruby, jekyll

## Setting
> 참고: https://jojoldu.tistory.com/288  
> macos 기본 ruby는 system ruby를 사용하므로 권한 이슈가 계속 생김.

#### 1. `rbenv` 설치
```
$ brew update
$ brew install rbenv ruby-build
```

#### 2. `rbenv` 설치 확인
```
$ rbenv versions
```
기본은 system 이므로 설치 system 으로 지정
.

#### 3. `rbenv`를 통해서 최신버전의 ruby 설치
설치 가능 버전 확인
```
$ rbenv install -l
```
목록 중 가장 최신 버전으로 설치
```
$ rbenv install {최신버전}
```

#### 4. 최신 버전 정상 설치 확인
```
$ rbenv versions
```
```
* system
  {최신버전}  => 설치된 버전이 나옴
```

#### 5. 설치된 버전으로 변경
```
$ rbenv global {최신버전}
```
확인
```
$ rbenv versions
```
```
  system
* {최신버전}  => 설치된 버전이 나옴
```

#### 6. env 환경 세팅
아래 코드를 `.zshrc` 에 추가
```
[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"
```

#### 7. jekyll, bundler 설치
```
$ gem install bundler
```

## Run
#### 1. .bundle 파일 추가
```
$ mkdir .bundle
```

#### 2. jekyll local 실행
```
$ bundle exec jekyll serve
```

#### 3. 접속
http://localhost:4000