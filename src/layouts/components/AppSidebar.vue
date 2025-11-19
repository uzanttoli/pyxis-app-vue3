<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import http from '../../core/http/httpClient'

const drawerOpen = ref(true)

const userName = ref('Uanderson')
const profile = ref('Administrador')
const avatarName = ref(null)

const menus = ref([
  { title: 'Dashboard', icon: 'mdi:report-arc' },
  { title: 'Operação', icon: 'mdi:account-group' },
])

async function getAvatar() {
  const { data } = await http.get(
    'http://172.16.252.214:4200/index.php/api/shared/avatar/avatar_selected/4602597',
  )
  avatarName.value = data[0].NOME_AVATAR
}

function imagemPerfil(img) {
  return `http://172.16.252.214:4200/index.php/api/shared/arquivos/minha_imagem/${img}`
}

getAvatar()
</script>

<template>
  <div class="flex h-screen">
    <aside
      class="bg-white border-r border-gray-200 w-64 flex-shrink-0 transition-all duration-300"
      :class="drawerOpen ? 'translate-x-0' : '-translate-x-47'"
    >
      <div class="h-16 flex items-center justify-between px-4 border-b border-gray-100">
        <div class="flex items-center gap-3 w-20">
          <img
            :src="imagemPerfil(avatarName)"
            alt="Imagem avatar"
            class="w-13 h-13 rounded-4xl border-2"
          />

          <div class="flex flex-col leading-tight">
            <span>{{ userName }}</span>
            <span class="text-sm text-gray-500">{{ profile }}</span>
          </div>
        </div>

        <button
          class="p-2 rounded-md hover:bg-gray-100 transition"
          @click="drawerOpen = !drawerOpen"
        >
          <Icon v-if="drawerOpen" icon="mdi:close" class="w-6 h-6 text-blue-500 cursor-pointer" />

          <Icon v-else icon="mdi:hamburger-menu" class="w-6 h-6 text-blue-500 cursor-pointer" />
        </button>
      </div>

      <nav class="p-4 overflow-y-auto space-y-2">
        <button
          v-for="(item, index) in menus"
          :key="index"
          class="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 text-left transition cursor-pointer"
        >
          <span class="flex gap-2">
            <Icon :icon="item.icon" class="text-blue-500 w-6 h-6" />
            {{ item.title }}
          </span>
        </button>
      </nav>
    </aside>
  </div>
</template>

<style scoped>
aside {
  background: var(--vt-c-default);
}
</style>
