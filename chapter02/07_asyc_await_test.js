//async : await를 포함한 함수, 결과로 Promise 객체 반환
async function init() {
  // fetch(주소) : 외부로 부터 응답을 가져옴(비동기)
  //await : 비동기 응답이 처리 될 때까지 대기 -> 동기로 변경경
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // response.ok : 응답 성공 시 true, 실패 시 false
  console.log(response.ok);
  if (response.ok) {
    const result = await response.json();
  }
  console.log('프로그램 종료');
}
init();
