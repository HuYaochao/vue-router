<!--  -->
<template>
    <table>
        <thead>
            <tr>
                <th>部门ID</th>
                <th>部门名称</th>
                <th>部门电话</th>
                <th>部门负责人</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(v, i) in state.list" :key="v.id">
                <td>{{ v.id }}</td>
                <td>{{ v.name }}</td>
                <td>{{ v.tel }}</td>
                <td>{{ v.principal }}</td>
                <td>
                    <a href="javascript:;" style="padding:0 10px" @click.prevent = "getUserInfo(v.id)">详情</a>
                    <a href="javascript:;" style="padding:0 10px" @click.prevent = "EditUserInfo(v.id)">编辑</a>
                    <a href="javascript:;" style="padding:0 10px" @click.prevent = "DeleteUserInfo(v.id)">删除</a>
                </td>
            </tr>
        </tbody>
    </table>
    <button @click.prevent = "AddUserInfo()">添加</button>
</template>

<script setup>
import { ref, reactive,onMounted ,inject} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const $http = inject('$http')

let state = reactive({
    list: []
})

function getUserInfo(id) {
    router.push(`/home/deptInfo/${id}`)
}

function EditUserInfo(id) {
    router.push(`/home/deptEdit/${id}`)
}
function AddUserInfo() {
    router.push(`/home/deptAdd/`)
}

async function DeleteUserInfo(id) {
    const confirmDelete = confirm("确定要删除这个部门吗？");
    if (confirmDelete) {
        try {
            await $http.delete(`/dep/${id}`);
            console.log('Department deleted successfully');
            // 从列表中移除已删除的部门
            state.list = state.list.filter(department => department.id !== id);
        } catch (error) {
            console.error('Error deleting department:', error);
        }
    }
}
async function getDeptList() {
    let {data} = await $http.get('/deps')
    state.list = data.data.rows;
}
onMounted(() => {
    getDeptList()
})

</script>

<style  scoped>

</style>
