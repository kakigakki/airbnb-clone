<template>
  <div sticky top-0 ref="header" relative>
    <!-- header  -->
    <div p="x-20 y-4" flex justify-between>
      <div flex items-center w="1/3">
        <div i-carbon-haze inline-block text-4xl m="r-2" color="[#ff385c]" />
        <span text-2xl font-bold color="[#ff385c]" select-none> airbnb-c</span>
      </div>
      <transition name="slide" in-out>
        <div absolute class="left-1/2 -translate-x-1/2" flex items-center space-x-10 text-lg v-if="showSearchBar">
          <button class="underline-btn" :class="{ 'border-black color-black': isSearchHotel }"
            @click="searchHotel(true)">宿泊先</button>
          <button class="underline-btn" :class="{ 'border-black color-black': !isSearchHotel }" @click="
          searchHotel(false)">体験</button>
          <button class="underline-btn">オンライン体験</button>
        </div>
      </transition>
      <div flex items-center text-lg cursor-pointer w="1/3" justify-end>
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
    <div w="[50.2rem]" m-auto>
      <transition name="slide-to-sm">
        <div v-if="showSearchBar" w="[50.2rem]" m-auto rounded-full border-1 border-gray-300 bg-gray-300 bg-opacity-20
          flex ref="searchBar">
          <div>
            <!-- ロケーション -->
            <button :class="{ 'transparant-btn': searchIdx !== 0, 'actived-transparant-btn': searchIdx === 0, }" py-3
              flex items-center @click="changeSearchIdx(0)">
              <div :class="{ 'w-60': isSearchHotel, 'w-100': !isSearchHotel }" border-gray-400 text-left pl-8>
                <div text-xs font-bold>ロケーション</div>
                <div text-lg font-light>where to go?</div>
              </div>
            </button>
          </div>
          <div flex v-show="isSearchHotel">
            <!-- チェックイン -->
            <button :class="{ 'transparant-btn': searchIdx !== 1, 'actived-transparant-btn': searchIdx === 1 }" flex
              items-center @click="changeSearchIdx(1)">
              <div w-40 text-left pl-5>
                <div text-xs font-bold>チェックイン</div>
                <div text-lg font-light>add date</div>
              </div>
            </button>
            <!-- チェックアウト -->
            <button :class="{ 'transparant-btn': searchIdx !== 2, 'actived-transparant-btn': searchIdx === 2 }" flex
              items-center @click="changeSearchIdx(2)">
              <div w-40 text-left pl-5>
                <div text-xs font-bold>チェックアウト</div>
                <div text-lg font-light>add date</div>
              </div>
            </button>
            <!-- 人数 -->
            <button :class="{ 'transparant-btn': searchIdx !== 3, 'actived-transparant-btn': searchIdx === 3 }" flex
              items-center @click="changeSearchIdx(3)">
              <div w-60 text-left pl-5>
                <div text-xs font-bold>人数</div>
                <div text-lg font-light>add guests</div>
              </div>
            </button>
          </div>
          <div flex v-show="!isSearchHotel">
            <!-- 人数 -->
            <button :class="{ 'transparant-btn': searchIdx !== 4, 'actived-transparant-btn': searchIdx === 4 }" flex
              items-center @click="changeSearchIdx(4)">
              <div w-100 text-left pl-5>
                <div text-xs font-bold>
                  日付
                </div>
                <div text-lg font-light>
                  add date
                </div>
              </div>
            </button>
          </div>
        </div>
      </transition>
      <transition name="slide-to-lg">
        <div mt-4 class="absolute top-0 left-1/2 -translate-x-1/2 " v-if="!showSearchBar"
          @click="toggleShowSearchBar()">
          <button rounded-full w-70 h-11 text-left pl-5 border-gray-300 border-1>Start Your
            Trip</button>
        </div>
      </transition>
      <div transition-all absolute
        :class="{ 'top-1/2 -translate-y-1/2 left-1/2': showSearchBar, 'top-1/2 -translate-y-1/2 left-1/2': !showSearchBar }">
        <div bg="[#ff385c]" h-11 flex justify-center items-center rounded-full>
          <div i-carbon-search color-white w-11></div>
          <span :class="{ 'w-0 opacity-0': searchIdx === -1, 'w-15 -ml-3 mr-2': searchIdx !== -1 }" color-white text-lg
            transition-all select-none cursor-pointer>Search</span>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
type searchIdxType = -1 | 0 | 1 | 2 | 3 | 4
const isSearchHotel = ref(true);
const searchIdx = ref<searchIdxType>(-1)
const searchBar = ref(null)
const header = ref(null)
const [showSearchBar, toggleShowSearchBar] = useToggle(false)
const searchHotel = (value: boolean) => {
  isSearchHotel.value = value
}
const changeSearchIdx = (index: searchIdxType) => {
  searchIdx.value = index
}
onClickOutside(searchBar, (event) => {
  console.log(event)
  searchIdx.value = -1
})
onClickOutside(header, (event) => {
  console.log(event)
  showSearchBar.value = false
})
        // interface Props {
        //
        // }
        // const props = defineProps<Props>();

</script>


<style scoped lang="scss">
/* 可以为进入和离开动画设置不同的持续时间和动画函数 */
.slide-to-lg-enter-active,
.slide-to-lg-leave-active,
.slide-to-sm-enter-active,
.slide-to-sm-leave-active,
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-to-lg-enter-from,
.slide-to-lg-leave-to {
  transform: translateY(100%) translateX(-50%) scale(2.5);
  opacity: 0;
}

.slide-to-sm-enter-from,
.slide-to-sm-leave-to {
  transform: translateY(-100%) scale(0.4);
  ;
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%) translateX(-50%) scale(0.5);
  opacity: 0.5;
}
</style>
