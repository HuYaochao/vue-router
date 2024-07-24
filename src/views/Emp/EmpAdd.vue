<template>
  <div >
    <h2>新增员工</h2>
    <form @submit.prevent="addEmployee">
      <div>
        <label for="username">用户名:</label>
        <input v-model="employee.username" type="text" id="username" required />
      </div>
      <div>
        <label for="name">昵称:</label>
        <input v-model="employee.name" type="text" id="name" required />
      </div>
      <div>
        <label for="email">邮箱:</label>
        <input v-model="employee.email" type="email" id="email" required />
      </div>
      <div>
        <label for="tel">联系方式:</label>
        <input v-model="employee.tel" type="text" id="tel" required />
      </div>
      <div>
        <label for="dep">部门:</label>
        <input v-model="employee.dep" type="text" id="dep" />
      </div>
      <div>
        <label for="password">密码:</label>
        <input v-model="employee.password" type="password" id="password" required />
      </div>
      <button type="submit">保存</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { inject } from 'vue';
const $http = inject('$http');

const router = useRouter();

// 组件的响应式数据
const employee = ref({
  username: '',
  name: '',
  email: '',
  tel: '',
  dep: '',
  password: '',
});

// 添加员工函数
async function addEmployee() {
    const response = await $http.post('/emp/add', employee.value);

    alert('员工信息新增成功');
    router.push('/'); // 新增成功后返回员工列表页面
  
}
</script>

<style scoped>

</style>

