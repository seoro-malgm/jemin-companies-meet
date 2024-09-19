<template>
  <div class="content-wrapper">
    <textarea
      class="content"
      placeholder="여기에 내용을 입력합니다..."
      v-model="text"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  // data: {
  //   type: String,
  //   default: null,
  // },
});
const emit = defineEmits();

const text = ref("");
</script>

<style lang="postcss" scoped>
.content-wrapper {
  width: 100%;
  height: 100%;
  padding: 1rem;
}
.content {
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  border: none;
  outline: none;
  resize: none;
  font-size: 2.2rem;
  line-height: 3.2rem;
  font-family: "LINESeedKR-Regular" sans-serif;
  letter-spacing: -0.08em;
  word-spacing: -0.08em;
  caret-color: #00f034;
}
</style>
