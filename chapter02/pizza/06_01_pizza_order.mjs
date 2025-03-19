function pizzaOrder(pizzaName) {
  const pizzaList = ['치즈피자', '불고기 피자', '페퍼로니피자'];

  return new Promise((resolve, reject) => {
    if (pizzaList.includes(pizzaName)) {
      // Promise 성공 시, 메시지를 반환하고 함수 실행
      resolve(`${pizzaName} 주문 완료!!`);

      setTimeout(() => {
        console.log(`${pizzaName} 배달을 시작했습니다!`);
      }, 1000);
    } else {
      // Promise 실패 시, 오류 메시지 반환
      reject(`${pizzaName} 주문이 실패했습니다!`);
    }
  });
}

// pizzaOrder 함수 내보내기
export default pizzaOrder;
