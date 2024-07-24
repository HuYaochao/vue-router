<template>
  <h1>添加部门</h1>
  <form @submit.prevent="addDepartment">
    <div>
      <label for="name">部&nbsp;门&nbsp;名&nbsp;称:</label>
      <input type="text" id="name" v-model="department.name" required>
    </div>
    <div>
      <label for="tel">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</label>
      <input type="text" id="tel" v-model="department.tel" required>
    </div>
    <div>
      <label for="principal">负&nbsp;&nbsp;责&nbsp;&nbsp;人:</label>
      <input type="text" id="principal" v-model="department.principal" required>
    </div>
    <div>
      <label for="principal_tel">负责人电话:</label>
      <input type="text" id="principal_tel" v-model="department.principal_tel" required>
    </div>
    <button type="submit">添加</button>
    <button type="button" @click="back">取消</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const router = useRouter();
const $http = inject('$http');

const department = ref({
  name: '',
  tel: '',
  principal: '',
  principal_tel: ''
});

const back = () => {
  router.go(-1);
}

async function addDepartment() {
  try {
    await $http.post('/dep', department.value);
    console.log('Department added successfully');
    router.push('/'); // 假设你希望在添加成功后返回主页或列表页
  } catch (error) {
    console.error('Error adding department:', error);
  }
}
</script>

<style scoped>

</style>
