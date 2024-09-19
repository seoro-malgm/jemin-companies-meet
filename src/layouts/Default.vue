<script setup>
import GlobalHeader from "@/components/globalHeader.vue";
import GlobalFooter from "@/components/globalfooter.vue";
</script>

<template>
  <div id="wrapper">
    <GlobalHeader />
    <main id="main">
      <router-view />
    </main>
    <GlobalFooter />
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 1rem;
  height: 100vh;
  max-height: 100vh;
}
#main {
  width: 100%;
  flex-grow: 1;
  max-height: calc(100vh - 10vh);
  @media screen and (max-width: 768px) {
    max-height: calc(100vh - 20vh);
  }
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
</style>
