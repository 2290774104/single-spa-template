<template>
  <div>
    <el-container>
      <el-header>这里是app1的另一个页面</el-header>
      <el-header><el-button @click="backBase">返回首页</el-button></el-header>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Index', components: {} })
export default class Index extends Vue {
  private async created() {}

  public backBase() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  line-height: 60px;
  text-align: center;
}
</style>
