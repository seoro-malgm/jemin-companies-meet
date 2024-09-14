<template>
  <div id="wrapper">
    <article class="content">
      <text-content />
    </article>
  </div>
</template>

<script setup>
import TextContent from "@/components/textContent.vue";
</script>

<style scoped>
#wrapper {
  position: absolute;
  width: 100%;
  height: calc(100vh - 25vh);
  @media screen and (max-width: 768px) {
    max-height: calc(100vh - 30vh);
  }
  overflow: hidden auto;
  position: relative;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
