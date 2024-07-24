<template>
    <div>
        <!-- 头部区域 -->
        <header class="header">管理系统</header>
        <!-- 中间主体区域 -->
        <div class="main">
            <!-- 左侧菜单栏 -->
            <div class="content left">
                <ul>
                    <router-link to="/home/dept">
                        <li>部门管理</li>
                    </router-link>
                    <router-link to="/home/emp">
                        <li>员工管理</li>
                    </router-link>
                    <router-link to="/home/access">
                        <li>权限管理</li>
                    </router-link>
                    <router-link to="/home/goods">
                        <li>商品管理</li>
                    </router-link>
                    <router-link to="/home/order">
                        <li>订单管理</li>
                    </router-link>
                    <router-link to="/home/system">
                        <li>系统设置</li>
                    </router-link>
                </ul>
            </div>
            <!-- 右侧内容区域 -->
            <div class="content right">
                <div class="main-content">
                    <router-view />
                </div>
            </div>
        </div>
        <!-- 尾部区域 -->
        <footer class="footer">版权信息</footer>
    </div>
</template>

<script>

</script>

<style  scoped>

</style>
