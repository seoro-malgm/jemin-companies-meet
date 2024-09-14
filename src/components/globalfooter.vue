<template>
  <footer id="global-footer">
    <div class="left">
      <ul class="list">
        <li>
          <img
            :src="getURL('/assets/logos/logo-jm.svg')"
            alt="제민컴퍼니즈 로고"
          />
        </li>
        <li>
          <img
            :src="getURL('/assets/logos/logo-gjy.svg')"
            alt="공주청년센터 로고"
          />
        </li>
      </ul>
    </div>
    <div class="center">
      <h6>2024.09.26 (목) 공주시청년센터 1층 라운지</h6>
    </div>
    <div class="right">
      <ul class="list">
        <li>
          <img
            :src="getURL('/assets/logos/logo-df.svg')"
            alt="다이얼팩토리 로고"
          />
        </li>
        <li>
          <img
            :src="getURL('/assets/logos/logo-sms.svg')"
            alt="서로맑음스튜디오 로고"
          />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { inject } from "vue";

const getURL = inject("getImageURL");
</script>

<style scoped>
#global-footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

#global-footer .left,
#global-footer .right {
  display: flex;
}

#global-footer .list {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
}

#global-footer img {
  min-width: 80px;
  width: auto;
  min-height: 72px;
  @media screen and (max-width: 768px) {
    min-width: 40px;
    min-height: 40px;
  }
}

#global-footer .center {
  text-align: center;
  font-size: 14px;
  color: #333;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
}

#global-footer .center h6 {
  display: inline-block;
  font-weight: 500;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
}
</style>
