<script setup lang="ts">
defineOptions({
  name: 'PImage'
})
defineProps<{
  src: string
}>()
</script>

<template>
  <img :src="src">
</template>
