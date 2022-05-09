<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const locale = zhCn;

</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200 ">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
    <Footer />
  </main>
</template>
