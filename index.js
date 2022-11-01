console.log("========수강신청 프로그램 입니다.========");
console.log("1. 회원가입  |  2. 로그인");
console.log("");

//JS 내장 모듈인 readline을 사용해 콘솔에서 값을 입력 받도록 하는 코드
const readline = require('readline'); 

const rl = readline.createInterface({ //인터페이스 객체 생성
  input: process.stdin,
  output: process.stdout
});

let n; // 입력 받은 정수를 저장할 변수
let n_output;
rl.on("line ", function(line){
  n = line;
  if(parseInt(n) === 1) {
    n_output = "회원가입 창입니다.";
  } else if(parseInt(n) === 2) {
    n_output = "로그인 창입니다.";
  } else {
    n_output = "잘못된 입력입니다. 다시 입력해주세요.";
  }
  console.log(n_output);
  rl.close();
})

function register() {

}