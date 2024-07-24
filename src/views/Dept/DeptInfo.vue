<!--  -->
<template>
 <h1>部门详细信息</h1>
 <h1>部门id是：{{ id }}</h1>
 <div v-show="department">
      <p>部门名称: {{ department.name }}</p>
      <p>电话: {{ department.tel }}</p>
      <p>负责人: {{ department.principal }}</p>
      <p>负责人电话: {{ department.principal_tel }}</p>
    </div>
 <button @click="back">返回</button>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const $http = inject('$http')

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
    var { data } = await $http.get(`/dep/${props.id}`);
    department.value = data.data;
    console.log(data);
}

onMounted(() => {
    getById();
})

</script>

<style  scoped>

</style>
