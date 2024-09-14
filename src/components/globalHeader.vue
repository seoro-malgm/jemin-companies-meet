<template>
  <header id="global-header">
    <h1>2024 제민컴퍼니즈 #마을 작은 포럼</h1>
    <h4>‘제민천 마을, 창업의 현실과 미래’</h4>
  </header>
</template>

<script setup>
const props = defineProps({
  data: {
    type: String,
    default: null,
  },
});
const emit = defineEmits();
</script>

<style scoped>
#global-header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  padding: 1rem 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}
#global-header h1 {
  font-size: 2rem;
  font-weight: 700;
  max-width: 60vw;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 1.5rem;
  }
}
#global-header h4 {
  font-size: 2rem;
  font-weight: 500;
  max-width: 40vw;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
  }
}
</style>
