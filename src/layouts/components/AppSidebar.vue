<script setup lang="ts">
defineProps<{
  open: boolean
}>()
defineEmits(['close'])
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black bg-opacity-40 md:hidden"
    @click="$emit('close')"
  ></div>

  <aside
    class="fixed md:static top-0 left-0 h-full w-64 bg-white border-r shadow-sm transform transition-transform duration-200 md:translate-x-0 flex flex-col"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="h-16 flex items-center px-4 border-b font-semibold">Menu</div>

    <nav class="flex-1 p-4 space-y-2">
      <a href="#" class="block px-3 py-2 rounded bg-gray-100">teste 1</a>
      <a href="#" class="block px-3 py-2 rounded bg-gray-100">teste 2</a>
    </nav>
  </aside>
</template>
