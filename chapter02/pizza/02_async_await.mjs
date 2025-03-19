import order from './06_01_pizza_order.mjs';

async function main() {
  // 예외 처리 구문
  try {
    const fn = await order('치피자');
  } catch (err) {
    //Promise 결과로 reject() 수행 시 예외 발생
    //-> catch 구문으로 잡아서 처리
    console.log(err);
  }
}

order();
