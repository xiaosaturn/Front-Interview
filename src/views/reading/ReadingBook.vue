<template>
    <div class="div-container">
        <el-result
            icon="success"
            title="敬请期待"
            sub-title="站长正在全力加班加点中..."
        >
            <template #icon>
                <el-image src="https://image.xiaosaturn.com/Photo/2023918/175100/ymf4n2j0tq1695030660832.png"></el-image>
            </template>
            <template #extra>
                <el-button type="primary">知道了</el-button>
            </template>
        </el-result>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
:deep(.el-result__title > p) {
    font-weight: bold;
    color: #333;
    font-size: 28px;
}
:deep(.el-result__subtitle > p) {
    font-weight: bold;
    color: #333;
    font-size: 24px;
}

</style>