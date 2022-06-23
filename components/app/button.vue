<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.app-button {
  outline: none;
  padding: 10px 16px;
}
</style>
