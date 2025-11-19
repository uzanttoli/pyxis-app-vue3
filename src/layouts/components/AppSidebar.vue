<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside
      class="bg-white border-r border-gray-200 w-64 flex-shrink-0 transition-all duration-300"
      :class="drawerOpen ? 'translate-x-0' : '-translate-x-47'"
    >
      <div class="h-16 flex items-center justify-between px-4 border-b border-gray-100">
        <span class="text-xl font-semibold">Menu</span>
        <button
          class="p-2 rounded-md hover:bg-gray-100 transition"
          @click="drawerOpen = !drawerOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <nav class="p-4 overflow-y-auto space-y-2">
        <button
          v-for="(item, index) in menus"
          :key="index"
          class="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 text-left transition"
        >
          <span>{{ item.title }}</span>
        </button>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawerOpen = ref(true)

const userName = ref('Fulano')

const menus = ref([{ title: 'Dashboard' }, { title: 'Operação' }, { title: 'Utilitários' }])
</script>
<style scoped>
aside {
  background: var(--vt-c-default);
}
</style>
