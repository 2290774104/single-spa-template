<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class App extends Vue {
  created() {
    console.log(this.$route);
  }
}
</script>

<style lang="scss"></style>
