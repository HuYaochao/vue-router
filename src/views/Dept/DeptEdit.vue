<template>
  <h1>编辑部门信息</h1>
  <h1>部门id是：{{ id }}</h1>
  <div v-show="department">
    <form @submit.prevent="updateDepartment">
      <div>
        <label for="name">部门名称:</label>
        <input type="text" id="name" v-model="department.name">
      </div>
      <div>
        <label for="tel">电话:</label>
        <input type="text" id="tel" v-model="department.tel">
      </div>
      <div>
        <label for="principal">负责人:</label>
        <input type="text" id="principal" v-model="department.principal">
      </div>
      <div>
        <label for="principal_tel">负责人电话:</label>
        <input type="text" id="principal_tel" v-model="department.principal_tel">
      </div>
      <button type="submit">保存</button>
      <button type="button" @click="back">取消</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const $http = inject('$http');

const department = ref({
  name: '',
  tel: '',
  principal: '',
  principal_tel: ''
}); 

const props = defineProps({
  id: String
});
console.log(props.id);

const back = () => {
  router.go(-1);
}

async function getById() {
  try {
    const { data } = await $http.get(`/dep/${props.id}`);
    department.value = data.data;
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function updateDepartment() {
  try {
    await $http.put(`/dep/${props.id}`, department.value);
    console.log('Department updated successfully');
    router.push('/'); 
  } catch (error) {
    console.error('Error updating department:', error);
  }
}

onMounted(() => {
  getById();
})
</script>