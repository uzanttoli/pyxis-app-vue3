<template>
  <div :class="['relative overflow-hidden rounded-2xl shadow-lg']">
    <div class="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-400"></div>

    <div class="relative flex items-start gap-4 p-6 md:p-8">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Icon icon="mdi:computer-classic" width="24" height="24" class="text-amber-50" />

          <div>
            <div class="text-white font-medium text-sm md:text-base">{{ title }}</div>
            <div v-if="subtitle" class="text-white/80 text-xs">{{ subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, toRefs } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Gerencial',
  subtitle: 'Dados Online de TMT',
  size: 'md',
})

const { title = 'Gerencial', subtitle = '', size = 'md' } = toRefs(props)
</script>

<style scoped>
svg {
  transform-origin: left bottom;
}
</style>
