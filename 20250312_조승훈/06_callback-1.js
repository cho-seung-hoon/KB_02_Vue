const order = (result, callback) => {
  console.log(`${result} 주문접수`);
  setTimeout(() => {
    callback(result);
  }, 3000);
};
const display = (result) => {
  console.log(`${result} 완료!`);
};
order('아메리카노', display);
