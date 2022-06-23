<template>
  <div>
    <p>Count: {{ count }}</p>
    <p ref="doubleCountElement">Double count: {{ doubleCount }}</p>
    <p>Name: {{ state.name }}</p>
    <p>Age: {{ state.age }}</p>
    <app-input type="text" v-model="state.name" />

    <app-button @click="increaseCount">Increase</app-button>
    <app-button @click="removeDoubleCountElement"
      >Remove double count element</app-button
    >
    <div class="random-image">
      <img
        v-for="image in images"
        width="300"
        class="image"
        :key="image.id"
        :src="image.download_url"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Image } from "@/composables/use-random-image";
interface People {
  name: string;
  age: number;
}

const count = ref<number>(0);
const state = reactive<People>({
  name: "PHNam",
  age: 25,
});
const images = ref<Image[]>([]);
const doubleCount = computed<number>(() => count.value * 2);

useRandomImage(5).then((response: Image[]) => {
  images.value = response;
});

watch(
  () => count.value,
  (newCount) => {
    if (newCount % 5 == 0) alert(`Count is divisible by 5: ${newCount}`);
  }
);

const increaseCount = (): void => {
  count.value += 1;
};

const doubleCountElement = ref<HTMLParagraphElement | null>(null);
const removeDoubleCountElement = (): void => {
  doubleCountElement.value?.remove();
};

onMounted(() => alert("mounted"));
</script>

<style>
.random-image {
  margin: 20px 0;
}

.random-image .image {
  padding: 0 10px;
}
</style>
