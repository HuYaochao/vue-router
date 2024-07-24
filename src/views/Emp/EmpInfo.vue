<template>
  <div>
    <h2>员工详情</h2>
    <div v-if="employee">
      <p><strong>ID:</strong> {{ employee.id }}</p>
      <p><strong>部门:</strong> {{ employee.dep }}</p>
      <p><strong>邮箱:</strong> {{ employee.email }}</p>
      <p><strong>昵称:</strong> {{ employee.name }}</p>
      <p><strong>联系方式:</strong> {{ employee.tel }}</p>
      <p><strong>用户名:</strong> {{ employee.username }}</p>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { useRoute } from "vue-router";

const $http = inject('$http');

const employee = ref(null);

const props = defineProps({
    id: String
});
console.log(props.id);

async function fetchEmployeeDetails(id) {
    console.log('Fetching details for ID:', id);
  try {
    const response = await $http.get('/emp/findById', {
      params: { id }
    });

    console.log('Response:', response);

    if (response.status === 200) {
        employee.value = response.data.data;
        
    } else {
      console.error('Failed to fetch employee details:', response.data.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
}

onMounted(() => {
  console.log('Component mounted');
  const id = route.params.id;
  fetchEmployeeDetails(Number(id));
});
</script>

<style scoped>

</style>
