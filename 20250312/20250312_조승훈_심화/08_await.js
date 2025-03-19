//await
//- 비동기 코드가 끝날 떄까지 대기
//  (다음으로 넘어가지 마!)

async function main() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //console.log('response : ', response);

    const data = await response.json(); // 비동기

    console.log(data);
  } catch (error) {
    console.error(err);
  }
}

main();
