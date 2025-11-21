<script setup>
import { ref } from 'vue'

import AppMenuItem from './AppMenuItem.vue'

const model = ref([
  {
    label: 'Home',
    items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home' }],
  },
  {
    label: 'UI Components',
    items: [
      { label: 'Form Layout', icon: 'pi pi-fw pi-id-card' },
      { label: 'Input', icon: 'pi pi-fw pi-check-square' },
      { label: 'Button', icon: 'pi pi-fw pi-mobile' },
      { label: 'Table', icon: 'pi pi-fw pi-table' },
      { label: 'List', icon: 'pi pi-fw pi-list' },
      { label: 'Tree', icon: 'pi pi-fw pi-share-alt' },
      { label: 'Panel', icon: 'pi pi-fw pi-tablet' },
      { label: 'Overlay', icon: 'pi pi-fw pi-clone' },
      { label: 'Media', icon: 'pi pi-fw pi-image' },
      { label: 'Menu', icon: 'pi pi-fw pi-bars' },
      { label: 'Message', icon: 'pi pi-fw pi-comment' },
      { label: 'File', icon: 'pi pi-fw pi-file' },
      { label: 'Chart', icon: 'pi pi-fw pi-chart-bar' },
      { label: 'Timeline', icon: 'pi pi-fw pi-calendar' },
      { label: 'Misc', icon: 'pi pi-fw pi-circle' },
    ],
  },
  {
    label: 'Prime Blocks',
    icon: 'pi pi-fw pi-prime',
    items: [
      {
        label: 'Free Blocks',
        icon: 'pi pi-fw pi-eye',
      },
      {
        label: 'All Blocks',
        icon: 'pi pi-fw pi-globe',
        url: 'https://blocks.primevue.org/',
        target: '_blank',
      },
    ],
  },
  {
    label: 'Pages',
    icon: 'pi pi-fw pi-briefcase',
    to: '/pages',
    items: [
      {
        label: 'Landing',
        icon: 'pi pi-fw pi-globe',
      },
      {
        label: 'Auth',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
          },
          {
            label: 'Error',
            icon: 'pi pi-fw pi-times-circle',
          },
          {
            label: 'Access Denied',
            icon: 'pi pi-fw pi-lock',
          },
        ],
      },
      {
        label: 'Crud',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Not Found',
        icon: 'pi pi-fw pi-exclamation-circle',
      },
      {
        label: 'Empty',
        icon: 'pi pi-fw pi-circle-off',
      },
    ],
  },
  {
    label: 'Hierarchy',
    items: [
      {
        label: 'Submenu 1',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 1.1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
            ],
          },
          {
            label: 'Submenu 1.2',
            icon: 'pi pi-fw pi-bookmark',
            items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }],
          },
        ],
      },
      {
        label: 'Submenu 2',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 2.1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            ],
          },
          {
            label: 'Submenu 2.2',
            icon: 'pi pi-fw pi-bookmark',
            items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }],
          },
        ],
      },
    ],
  },
  {
    label: 'Get Started',
    items: [
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-book',
      },
      {
        label: 'View Source',
        icon: 'pi pi-fw pi-github',
        url: 'https://github.com/primefaces/sakai-vue',
        target: '_blank',
      },
    ],
  },
])
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
