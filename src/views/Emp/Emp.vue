<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>部门</th>
          <th>邮箱</th>
          <th>昵称</th>
          <th>联系方式</th>
          <th>用户名</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in state.list" :key="emp.id">
          <td>{{ emp.id }}</td>
          <td>{{ emp.dep }}</td>
          <td>{{ emp.email }}</td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.tel }}</td>
          <td>{{ emp.username }}</td>
          <td>
            <button @click="viewDetails(emp.id)">详情</button>
            <button @click="editEmployee(emp.id)">编辑</button>
            <button @click="deleteEmployee(emp.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
  <button @click="addEmployee">添加员工</button>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const $http = inject('$http');

let state = reactive({
  list: [],
  pageNum: 1,
  pageSize: 10
});


async function fetchData() {
  try {
    const response = await $http.get('/emp/listByPage', {
      params: {
        pageNum: state.pageNum,
        pageSize: state.pageSize
      }
    });

    console.log('Response:', response);

    if (response.status === 200 ) {
        state.list = response.data.data.rows;
      
    } else {
      console.error('Failed to fetch data:', response.data.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



onMounted(() => {
    fetchData();
  
});

function viewDetails(id) {
  router.push(`/home/empInfo/${id}`);
}

function editEmployee(id) {
  // 这里可以导航到编辑员工页面，或者显示编辑表单
  console.log('Edit employee with ID:', id);
  router.push(`/home/empEdit/${id}`);
}

function deleteEmployee(id) {
  $http.get('/emp/deleteById', {
    params: { id }
  })
  .then(response => {
    console.log('Employee deleted:', response.data);
    fetchData(); // 重新加载数据
  })
  .catch(error => {
    console.error('Error deleting employee:', error);
  });
}

function addEmployee() {
    // 这里可以导航到添加员工页面，或者显示添加表单
    console.log('Add new employee');
    router.push('/home/empAdd');
}

</script>

<style scoped>

</style>

