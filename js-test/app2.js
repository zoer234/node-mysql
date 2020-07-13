// 다른 파일에 있는 정보를 가져오는 방법
// require = 내가 만든 다른파일에있는거를 실행시킨다. 
// ./ = 현재의 파일인 app2.js 가 있는 디렉토리를 말한다.
// () 안에 가져올 파일명을 입력해준다.
// .. = 윗 경로 
// app2.js 에 있는 name 을 가져오려면 여기에 const name 이라고 작성해줘야 한다.
const utils = require('./utils.js')
const getNotes = require('./notes.js')
let sum = utils.add(- 4 ,2)
console.log(sum)

console.log(utils.name)

console.log(utils.minus(1,10))

//let sum = add(4, -2)
//console.log(sum)

// utils.js 파일 안에 있는 , name 값을 사용하려 한다.


// console.log(name)


// 새로운 파일 notes.js 라고 만듭니다.
// notes.js 파일 안에 getNotes 라는 함수를 만들고
// 이 함수는 "Hello ~" 를 리턴하는 함수입니다.
// app2.js 에서 이 함수를 불러와서 콘솔에 로그 찍으시오.







