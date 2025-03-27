<!-- Options API 적용 -->
<template>
  <div>
    <h3>Options API</h3>
    <input
      type="text"
      placeholder="입력하면 대문자로 변환"
      :value="name"
      @input="changeName($event.target.value)"
    />
  </div>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />

    <button @click="calculateSum(x, y)">계산하기</button>
    <p>X + Y = {{ sum1 }}</p>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'Cala2',

  setup() {
    const name = (ref = ''); //data() 대체

    const changeName = (intputName) => {
      name.value = intputName.toUpperCase();
    };
    //-----------------------
    // 계산 관련 data, method
    const x = ref(5);
    const y = ref(7);
    const sum1 = ref(12);

    // 계산 관련 메서드
    const calculateSum = (num1, num2) => {
      sum1.value = num1 + num2;
    };
  },
};
</script>
