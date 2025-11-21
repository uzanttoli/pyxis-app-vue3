<script setup>
import Card from '../components/Card/Card.vue'
import CardTitlePageWithBackground from '../components/CardTitlePageWithBackground.vue'
import Select from 'primevue/select'

import { ref } from 'vue'

const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-semibold text-black">Card</h1>

    <section>
      <Card title="Aqui"> tem de tudo muito bom dsad </Card>
    </section>

    <section class="pt-2">
      <CardTitlePageWithBackground />
    </section>
    <div class="card flex justify-center">
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Selecione um item"
        class="w-full md:w-56 bg-white"
      />
    </div>
  </div>
</template>
