<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const locale = zhCn;

</script>

<template>
  <main font-sans text="center gray-700 dark:gray-200 ">
    <el-config-provider :locale="locale">
      <Layout></Layout>
    </el-config-provider>
  </main>
</template>
