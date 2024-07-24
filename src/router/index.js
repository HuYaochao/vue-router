import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Dept from "../views/Dept/Dept.vue";
import DeptInfo from "../views/Dept/DeptInfo.vue";
import DeptEdit from "../views/Dept/DeptEdit.vue";
import DeptAdd from "../views/Dept/DeptAdd.vue";

import Emp from "../views/Emp/Emp.vue";
import EmpInfo from "../views/Emp/EmpInfo.vue";
import EmpEdit from "../views/Emp/EmpEdit.vue";
import EmpAdd from "../views/Emp/EmpAdd.vue";

import Access from "../views/Access.vue";
import Goods from "../views/Goods.vue";
import Order from "../views/Order.vue";
import System from "../views/System.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: '/',
        redirect:'/Home/dept',   
    },
    {
        path: '/Home',
        component: Home,
        children: [
            { path:'dept', component:Dept, },
            { path:'access', component:Access, },
            { path:'goods', component:Goods, },
            { path:'order', component:Order, },
            { path:'system', component:System ,},
            { path: 'deptInfo/:id', component: DeptInfo, props: true },
            { path:'deptEdit/:id', component:DeptEdit ,props:true},
            { path: 'deptAdd', component: DeptAdd },
            { path: 'emp', component: Emp },
            { path: 'empInfo/:id', component: EmpInfo, props: true },
            { path: 'empEdit/:id', component: EmpEdit, props: true },
            { path: 'empAdd', component: EmpAdd },
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    // 内部提供了 history 模式的实现。
    //为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})



//导出router 对象
export default router