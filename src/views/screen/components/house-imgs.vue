<template>
  <div class="house_imgs_root">
    <img class="close" src="@/assets/images/screen/close.png" alt="" />

    <div class="title">
      {{ house.actualName }}
    </div>

    <template v-if="imgList.length">
      <img class="main_img" :src="imgList[currentImgIndex]" alt="" />

      <div class="more">
        <div class="part" @click="onPreview()">
          <img src="@/assets/images/screen/more-2.png" alt="" />
        </div>
        <div class="imgs">
          <div
            v-for="(item, index) in showImgs"
            :key="index"
            class="preview"
            :class="{ active: item.imgIndex === currentImgIndex }"
          >
            <img :src="item.filePath" alt="" />
          </div>
        </div>
        <div class="part right" @click="onNext()">
          <img src="@/assets/images/screen/more-2.png" alt="" />
        </div>
      </div>
    </template>

    <template v-else>
      <section class="no_data">
        <img src="@/assets/images/screen/No picture.png" alt="" />
        <span>暂无数据</span>
      </section>
    </template>
  </div>
</template>

<script setup name="HouseImgs">
import bus from "vue3-eventbus";
import { computed } from "vue";
import { fetchListFilesByKeyCode } from "@/api/screen";
import { cloneDeep } from "lodash";

const imgList = ref([0, 1, 2, 3, 4, 5, 6, 7, 8]);
const house = JSON.parse(localStorage.getItem("currentHouse"));
const currentImgIndex = ref(0);

const showImgs = computed(() => {
  if (currentImgIndex.value < 3) {
    // 前三张
    const list = cloneDeep(imgList.value);
    return list.splice(0, 3);
  } else if (currentImgIndex.value > imgList.value.length - 3) {
    // 后三张
    const list = cloneDeep(imgList.value);
    return list.splice(imgList.value.length - 3, 3);
  } else {
    const list = cloneDeep(imgList.value);
    return list.splice(currentImgIndex.value - 2, 3);
  }
});

bus.on("onMapItemClick", async (data) => {
  fetchListFilesByKeyCodeFun();
});

function onPreview() {
  if (currentImgIndex.value === 0) return;
  currentImgIndex.value -= 1;
}

function onNext() {
  if (currentImgIndex.value === imgList.value.length - 1) return;
  currentImgIndex.value += 1;
}

async function fetchListFilesByKeyCodeFun() {
  // const depart = JSON.parse(localStorage.getItem("currentDepart"));
  const house = JSON.parse(localStorage.getItem("currentHouse"));

  const { rows } = await fetchListFilesByKeyCode({
    keyCode: house.keyCode,
  });

  imgList.value =
    rows.map((item, index) => {
      return {
        ...item,
        imgIndex: index,
      };
    }) || [];
}

onMounted(() => {
  fetchListFilesByKeyCodeFun();
});
</script>

<style scoped lang="scss">
* {
  flex-shrink: 0;
}
.house_imgs_root {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url("../../../assets/images/screen/window-1.png") no-repeat;
  background-size: 100% 100%;
  padding: 38px 25px 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  .close {
    position: absolute;
    right: 8px;
    top: 38px;
    width: 24px;
  }

  .title {
    width: 100%;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0px 1px 1px rgba(0, 11, 10, 0.43);
  }

  .main_img {
    width: 100%;
    height: 227px;
    margin-top: 16px;
  }

  .more {
    width: 100%;
    flex: 1 0;
    margin-top: 10px;
    display: flex;
    align-items: center;
    overflow: hidden;

    .part {
      width: 19px;
      height: 100%;
      background: rgba(57, 158, 233, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 7px 0 0;
      cursor: pointer;

      img {
        height: 17px;
      }
    }

    .right {
      margin: 0 0 0 7px;
      img {
        transform: rotate(180deg);
      }
    }

    .imgs {
      flex: 1 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .preview {
        width: 100px;
        height: 100%;
        margin-left: 9px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .active {
        border: 1px solid rgba(55, 130, 255, 1);
      }
    }

    .ml0 {
      margin-left: 0;
    }
  }

  .no_data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 30%;
      margin-right: 10%;
    }

    span {
      margin-top: 10px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>
