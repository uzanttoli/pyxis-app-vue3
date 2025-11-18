<template>
  <header class="h-16 flex items-center px-4 bg-amber-400 border-b shadow-sm">
    <button class="md:hidden mr-3" @click="$emit('toggle-sidebar')">
      <svg
        class="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <h1 class="font-semibold text-lg">Minha Aplicação</h1>
  </header>
</template>
