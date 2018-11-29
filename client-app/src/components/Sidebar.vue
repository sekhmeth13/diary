<template>
    <el-menu :default-active="currentIndex()" @select="handleSelect">
      <router-link to="/today">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
              Aujourd'hui
              </el-menu-item>
            </router-link>

            <router-link to="/past">
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
              Précédemment
              </el-menu-item>
            </router-link>

            <router-link to="/stats">
              <el-menu-item index="3">
                <i class="el-icon-menu"></i>
              Statistiques
              </el-menu-item>
            </router-link>
    </el-menu>
</template>

<script>
export default {
  data: () => {
    const activeMenuItem = '1';
    return {
      activeMenuItem,
    };
  },
  name: 'Sidebar',
  props: {
  },
  methods: {
    handleSelect(key) {
      this.activeMenuItem = key;
    },
    currentIndex() {
      const paths = [
        { id: '1', path: '/today' },
        { id: '1', path: '/' },
        { id: '2', path: '/past' },
        { id: '3', path: '/stats' },
      ];

      return paths.filter(el => this.$route.path === el.path, this)[0].id;
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
  }
</style>
