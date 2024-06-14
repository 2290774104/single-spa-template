<template>
  <div>
    <el-container>
      <el-header>这里是app2的首页</el-header>
      <el-header><el-button @click="pageGo">页面跳转测试</el-button></el-header>
      <el-main>
        <h3>组件测试</h3>
        <table-component />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageSkeleton from '@/components/ImageSkeleton.vue';
import TableComponent from '@/components/TableComponent.vue';

@Component({ name: 'Index', components: { TableComponent } })
export default class Index extends Vue {
  private async created() {}

  public pageGo() {
    this.$router.push({
      path: 'nextPage'
    });
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  line-height: 60px;
  text-align: center;
}
</style>
