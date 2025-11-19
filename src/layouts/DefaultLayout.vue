<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from './components/AppSidebar.vue'

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <AppSidebar :open="sidebarOpen" @close="sidebarOpen = false" />

    <div class="flex flex-col flex-1">
      <main class="p-4 overflow-auto flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
