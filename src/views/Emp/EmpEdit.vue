<template>
  <div>
    <h2>编辑员工信息</h2>
    <form @submit.prevent="updateEmployee">
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
        <input v-model="employee.dep" type="text" id="dep" required />
      </div>
      <div>
        <label for="password">密码:</label>
        <input v-model="employee.password" type="password" id="password" required />
      </div>
      <button type="submit">保存</button>
      <button @click="cancel">取消</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const $http = inject('$http');
const route = useRoute();
const router = useRouter();

const employee = ref({
  id: null,
  username: '',
  name: '',
  email: '',
  tel: '',
  dep: '',
  password: ''
});

async function fetchEmployeeDetails(id) {
  try {
    const response = await $http.get('/emp/findById', {
      params: { id }
    });

    if (response.status === 200 ) {
      employee.value = response.data.data;
    } else {
      console.error('Failed to fetch employee details:', response.data.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
}

async function updateEmployee() {
  try {
    const response = await $http.post('/emp/update', employee.value, {
      params: { id: employee.value.id },
      headers: { 'Content-Type': 'application/json' }
    });


    if (response.status === 200) {
      alert('员工信息更新成功');
      router.push('/home/emp'); // 返回到员工列表页面
    } else {
      console.error('Failed to update employee:', response.data.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error updating employee:', error);
  }
}

function cancel() {
  router.push('/home/emp'); // 返回到员工列表页面
}

onMounted(() => {
  const id = route.params.id;
  fetchEmployeeDetails(Number(id));
});
</script>

<style scoped>

</style>
