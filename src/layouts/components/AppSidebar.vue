<script setup lang="ts">
defineProps<{
  open: boolean
}>()
defineEmits(['close'])
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black/40 md:hidden"
    @click="$emit('close')"
  ></div>

  <aside
    class="fixed md:static top-0 left-0 h-full w-72 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl transform transition-transform duration-200 md:translate-x-0 flex flex-col md:rounded-2xl md:m-4 relative"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="relative h-16 flex items-center px-4 border-b border-white/20">
      <img src="@/assets/logo.svg" alt="Logo Pyxis" class="w-8 h-8 mr-2" />
      <span class="font-semibold">Pyxis App</span>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5"></div>
    </div>

    <nav class="flex-1 p-4 space-y-2">
      <RouterLink
        to="/ocupacao"
        class="group relative block px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 shadow-sm transition"
      >
        Ocupação
        <span
          class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block px-2 py-1 text-xs rounded-lg bg-black/60 text-white backdrop-blur-md border border-white/20 shadow"
        >
          Página inicial
        </span>
      </RouterLink>

      <RouterLink
        to="/about"
        class="group relative block px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 shadow-sm transition"
      >
        Sobre
        <span
          class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block px-2 py-1 text-xs rounded-lg bg-black/60 text-white backdrop-blur-md border border-white/20 shadow"
        >
          Sobre o app
        </span>
      </RouterLink>

    </nav>
  </aside>
</template>
