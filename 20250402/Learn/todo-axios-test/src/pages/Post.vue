<template>
  <div>
    <h1>/post(할 일 추가)</h1>
    <hr />
    <h3>할 일 추가</h3>
    <!-- form 태그 내부에서 submit 이벤트를 막고 addToDo 호출 -->
    <form @submit.prevent="addTodo">
      <div>
        할 일 :
        <input type="text" v-model="stat.todo.todo" />
      </div>
      <div>
        설명 :
        <input type="text" v-model="stat.todo.desc" />
      </div>
      <button type="submit">추가</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const stat = reactive({
  todo: { todo: '', desc: '', done: false },
});

//라우터 객체 생성
const router = useRouter();

// 추가 버튼 클릭 시 동작
const addTodo = async () => {
  const url = '/api/todos';
  const response = await axios.post(url, stat.todo);
  const result = response.data; // 응답 데이터
  const id = result.id; // 추가된 할 일의 id

  router.push(`/get`);
  console.log(response.data); // 응답 확인
};
</script>
