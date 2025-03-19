// Promise
// -> 내부 비동기 코드가 끝나면 성공/실패 결과를 반환하겠다 약속하는 객체체
const pizza = new Promise((resolve, reject) => {
  let likePizza = true;

  if (likePizza) {
    resolve('피자 주문했습니다.');
  } else {
    reject('피자 주문하지 않습니다.');
  }
});

pizza
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
