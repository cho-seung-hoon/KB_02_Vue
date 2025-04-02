<template>
  <div>
    <h1>/get/:id(단건 조회)</h1>
    <hr />
    <h3>조회할 Todo의 id 입력</h3>
    <div>
      <input type="text" placeholder="id입력" v-model="id" />
      <button @click="getTodo">조회</button>
    </div>

    <div>
      <h3>조회결과</h3>
      <ul>
        <li>id : {{ state.todo.id }}</li>
        <li>todo : {{ state.todo.todo }}</li>
        <li>desc : {{ state.todo.desc }}</li>
        <li>done : {{ state.todo.done }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'; // 현재 라우팅 정보를 담고 있는 객체

const currentRoute = useRoute();
// 현재 페이지 라우팅 시 id 파라미터에 전달된 값 콘솔에 출력
console.log('currentRoute : ', currentRoute.params.id);

const id = ref('1');
const state = reactive({ todo: {} });
const getTodo = async () => {
  // '/api' === 'http://localhost:3000'
  // ref() == 객체 -> 데이터 접근 시 .value 이용
  const response = await axios.get(`/api/todos/${id.value}`);
  state.todo = response.data; // 응답 결과를 state.todo에 대입 -> 화면이 다시 렌더링
};

//화면에 컴포넌트가 렌더링 될떄
onMounted(() => {
  getTodo();
});
</script>
