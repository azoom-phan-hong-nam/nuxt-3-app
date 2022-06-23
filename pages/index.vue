<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double count: {{ doubleCount }}</p>
    <p>Name: {{ state.name }}</p>
    <p>Age: {{ state.age }}</p>
    <input type="text" v-model="state.name" />
    <div class="random-image">
      <img
        v-for="image in state.images"
        width="300"
        class="image"
        :key="image.id"
        :src="image.download_url"
      />
    </div>

    <app-button @click="increaseCount">Increase</app-button>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);
const state = reactive({
  name: "PHNam",
  age: 25,
  images: [],
});
const doubleCount = computed(() => count.value * 2);

useRandomImage(5).then((response) => {
  state.images = response;
});

watch(
  () => count.value,
  (newCount) => {
    if (newCount % 5 == 0) alert(`Count is divisible by 5: ${newCount}`);
  }
);

const increaseCount = () => {
  count.value += 1;
};
</script>

<style>
.random-image {
  margin: 20px 0;
}

.random-image .image {
  padding: 0 10px;
}
</style>
