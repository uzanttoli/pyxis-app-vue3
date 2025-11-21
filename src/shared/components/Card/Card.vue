<script setup>
import CardTitle from './CardTitle.vue'

defineProps({
  title: String,
})
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all cursor-pointer"
  >
    <div class="flex items-center justify-between mb-3">
      <CardTitle :title="title"></CardTitle>
      <slot name="action"></slot>
    </div>

    <!-- <p class="text-gray-500 text-sm leading-relaxed">
      {{ description }}
    </p> -->

    <div class="mt-4 text-gray-600">
      <slot></slot>
    </div>
  </div>
</template>
