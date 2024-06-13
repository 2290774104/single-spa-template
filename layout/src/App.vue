<script setup lang="ts">
import { ref, type CSSProperties, VueElement, reactive } from 'vue'
import type { ItemType, MenuProps } from 'ant-design-vue'
import router from './router'

const layoutStyle: CSSProperties = {
  height: '100%'
}

const headerStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '60px',
  color: '#fff'
}

const contentStyle: CSSProperties = {}

const siderStyle: CSSProperties = {}

const selectedKeys = ref<string[]>(['Vue2'])
const openKeys = ref<string[]>(['1'])

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group'
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type
  } as ItemType
}

const items: ItemType[] = reactive([
  getItem('子项目', '1', null, [
    getItem('Vue', 'vue', null, [getItem('Vue2-1', 'app1'), getItem('Vue2-2', 'app2')], 'group')
  ])
])

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
  router.push({
    path: `/${e.key}`
  })
}
</script>

<template>
  <a-layout :style="layoutStyle">
    <a-layout-sider :style="siderStyle">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :items="items"
        @click="handleClick"
      ></a-menu
    ></a-layout-sider>
    <a-layout>
      <a-layout-header :style="headerStyle">子项目</a-layout-header>
      <a-layout-content :style="contentStyle" id="microApp"></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss"></style>
