import order from './06_01_pizza_order.mjs';

order('치즈피자') // 'g'는 없는 피자 이름이므로 실패로 처리될 것입니다.
  .then((message) => {
    // message는 resolve()에서 반환된 값입니다.
    console.log(message); // `${pizzaName} 주문 완료!!` 출력
  })
  .catch((err) => {
    // err는 reject()에서 반환된 값입니다.
    console.log(err); // `${pizzaName} 주문이 실패했습니다!` 출력
  });
