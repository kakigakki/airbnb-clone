<template>
  <!-- header  -->
  <div p="x-20 y-4" flex justify="between">
    <div flex items-center>
      <div i-carbon-haze inline-block text-4xl m="r-2" color="[#ff385c]" />
      <span text-2xl font-bold color="[#ff385c]" select-none> airbnb-c</span>
    </div>
    <div flex items-center space-x-10 text-lg>
      <button class="underline-btn" :class="{ 'border-black color-black': isSearchHotel }"
        @click="searchHotel(true)">宿泊先</button>
      <button class="underline-btn" :class="{ 'border-black color-black': !isSearchHotel }" @click="
      searchHotel(false)">体験</button>
      <button class="underline-btn">オンライン体験</button>
    </div>
    <div flex items-center text-lg cursor-pointer>
      <button class="transparant-btn" py-2 px-3>ホストになる</button>
      <div class="transparant-btn" flex items-center justify-center w-11 h-11 mr-2>
        <span i-iconoir-language text-sm />
      </div>
      <div border-1 border-gray-300 rounded-full flex items-center space-x-2 px-2 py-1 hover:shadow-lg>
        <span i-bi-list text-lg color="black" />
        <span i-carbon-user-avatar-filled text-2xl />
      </div>
    </div>
  </div>

  <!-- search -->
  <div w-201 m-auto rounded-full bg-red bg-opacity-20 flex>
    <div>
      <!-- ロケーション -->
      <button class="transparant-btn" py-4 flex items-center @mouseover="hideDividers([1])"
        @mouseleave="hideDividers([])">
        <div :class="{ 'w-70': isSearchHotel, 'w-100': !isSearchHotel }" border-gray-400>ロケーション</div>
        <div :class="{ 'border-transparent': dividers.includes(1) }" h-6 border-r-1 border-gray-400></div>
      </button>
    </div>
    <div flex v-show="isSearchHotel">
      <!-- チェックイン -->
      <button class="transparant-btn" flex items-center @mouseover="hideDividers([1, 2])" @mouseleave="hideDividers()">
        <div w-40>チェックイン</div>
        <div :class="{ 'border-transparent': dividers.includes(2) }" h-6 border-r-1 border-gray-400></div>
      </button>
      <!-- チェックアウト -->
      <button class="transparant-btn" flex items-center @mouseover="hideDividers([2, 3])" @mouseleave="hideDividers()">
        <div w-40>チェックアウト</div>
        <div :class="{ 'border-transparent': dividers.includes(3) }" h-6 border-r-1 border-gray-400></div>
      </button>
      <!-- 人数 -->
      <button class="transparant-btn" flex items-center @mouseover="hideDividers([3])" @mouseleave="hideDividers()">
        <div w-50>人数</div>
      </button>
    </div>
    <div flex v-show="!isSearchHotel">
      <!-- 人数 -->
      <button class="transparant-btn" flex items-center @mouseover="hideDividers([1])" @mouseleave="hideDividers()">
        <div w-100>日付</div>
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
const dividers = ref<number[]>([])
const isSearchHotel = ref(true);
const hideDividers = (shouldHideDividers: number[] = []) => {
  dividers.value = shouldHideDividers
}
const searchHotel = (value: boolean) => {
  isSearchHotel.value = value
}
        // interface Props {
        //
        // }
        // const props = defineProps<Props>();

</script>


          <style scoped lang="scss">
</style>
