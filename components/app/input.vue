<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input type="text" :value="modelValue" @input="updateModelValue" />
  </div>
</template>

<script setup lang="ts">
const UPDATE_MODEL_VALUE_EVENT = "update:modelValue";
interface Props {
  modelValue?: string | number;
  label?: string;
}

interface Emits {
  (e: typeof UPDATE_MODEL_VALUE_EVENT, value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const updateModelValue = (event: Event) => {
  const input = event.target as HTMLInputElement;

  emit(UPDATE_MODEL_VALUE_EVENT, input.value);
};
</script>

<style></style>
