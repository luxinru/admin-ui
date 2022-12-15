<template>
  <div class="house_imgs_root">
    <img class="close" src="@/assets/images/screen/close.png" alt="" />

    <div class="title">川中油气矿</div>

    <img class="main_img" src="@/assets/images/screen/pic1.png" alt="" />

    <div class="more">
      <div class="part">
        <img src="@/assets/images/screen/more-2.png" alt="">
      </div>
      <div class="preview ml0">
        <img src="@/assets/images/screen/pic2.png" alt="" />
      </div>
      <div class="preview">
        <img src="@/assets/images/screen/pic3.png" alt="" />
      </div>
      <div class="preview">
        <img src="@/assets/images/screen/pic4.png" alt="" />
      </div>
      <div class="part right">
        <img src="@/assets/images/screen/more-2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup name="HouseImgs"></script>

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

    .preview {
      flex: 1 0;
      height: 100%;
      margin-left: 9px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .ml0 {
      margin-left: 0;
    }
  }
}
</style>
