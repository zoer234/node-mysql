 // 파일 하나 만들기
 // const 옆에 변수는 고정이다. 바뀌면 안됨
 // const = 상수 (변경하지 못함)
 
 const fs = require('fs')

 // validator 패키지 가져다 쓰기
 const validator = require('validator')

 let ret = validator.isEmail('abc@naver.com')
 ret = validator.isURL('http://naver.com')
 console.log(ret)


 // 1. chalk 라는 패키지(모듈 , 라이브러리)를 설치하세요.
 // 2. app.js 파일에서 로딩하세요.
 // 3. 문자열로 "Success!" 라고 출력할건데 , 녹색 (green) 으로 출력하세요.
 // 4. 3번의 문제에 추가하여 bold 체로 출력하시오

 // bold = 글자두껍게 , inverse = 글자 테두리
const chalk = require('chalk')
console.log(chalk.green.bold.inverse('Success!' ),chalk.blue('Good'))
















 //fs.writeFileSync('notes.txt' , '안녕하세요 ? ')

// 1. appendFileSync 라는 함수를 이용해서 
// 2. notes.txt 파일에 , 새로운 내용을 추가하세요.
// 3. 실행하여 결과를 확인합니다.

// appendFileSync  = 기존 텍스트에 내용을 추가한다.
// 내용을 추가할댄 위에 writeFileSync 는 주석처리 해준다.


// fs.appendFileSync('notes.txt' , '\n반갑습니다.')






