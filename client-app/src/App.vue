<template>
  <div id="app">
    <el-container>
      <el-aside>
            <Sidebar></Sidebar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  data: () => ({
    visible: false,
  }),
  components: {
    Sidebar,
  },
};
</script>

<style>
</style>
