<template>
  <slot msg="msg"> </slot>
  <slot :msg="1" name="slot1"> </slot>
  <h1>
    h1
  </h1>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: boolean
}>();

// // 3.3+：另一种更简洁的语法
// const emit = defineEmits<{
//   change: [id: number] // 具名元组语法
//   update: [value: string]
// }>()


const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const slots = defineSlots<{
  default(props: { msg: string }): any;
  slot1(props: { msg: number }): any;
}>()

</script>
<style lang="scss"></style>