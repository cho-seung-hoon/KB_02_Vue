// exprot default
// -내보내지는 뱐수 | 함수의 기본 값을 설정
//  == 외부에서 import 시 가져오는 변수 | 함수가 고정되어있음

/* export */ const hi = (name) => {
  console.log('${name}님, 안녕하세요?');
};

/* export */ const goodbye = (name) => {
  console.log('${name}님, 안녕히가세요요?');
};

export default hi;
