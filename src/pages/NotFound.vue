<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="p-3 flex justify-center">
        <img
          class="logo"
          :src="getURL(`/assets/logo-kor-horizontal-black.png`)"
          alt="dcs lab 로고 이미지"
        />
      </div>
      <h1 class="text-lg md:text-2xl">페이지를 찾을 수 없습니다</h1>
      <p class="text-sm md:text-base">링크를 다시 확인하시길 바랍니다</p>
      <div class="text-center mt-3">
        <a
          href="/"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >메인페이지로 이동하기</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const getURL = inject("getImageURL");
    return { getURL };
  },
};
</script>

<style scoped>
.logo {
  width: 300px;
  max-width: 70vw;
}
</style>
