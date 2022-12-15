<template>
  <div class="house_info_root">
    <img class="close" src="@/assets/images/screen/close.png" alt="" />

    <div class="title">川中油气矿</div>

    <div class="content">
      <div class="tr">
        <div class="item">
          <span class="label">省份</span>
          <span class="value">四川省</span>
        </div>
        <div class="item">
          <span class="label">市区</span>
          <span class="value">遂宁市船山区</span>
        </div>
      </div>

      <div class="tr">
        <div class="item">
          <span class="label">房屋结构</span>
          <span class="value">混合结构</span>
        </div>
        <div class="item">
          <span class="label">房屋结构</span>
          <span class="value">混合结构</span>
        </div>
      </div>

      <div class="tr">
        <div class="item">
          <span class="label">建筑面积</span>
          <span class="value">1044㎡</span>
        </div>
        <div class="item">
          <span class="label">建筑面积</span>
          <span class="value">1044㎡</span>
        </div>
      </div>

      <div class="tr">
        <div class="item">
          <span class="label">地上总层</span>
          <span class="value">2层</span>
        </div>
        <div class="item">
          <span class="label">地上总层</span>
          <span class="value">2层</span>
        </div>
      </div>

      <div class="tr">
        <div class="item">
          <span class="label">资产编号</span>
          <span class="value">21549794646</span>
        </div>
        <div class="item">
          <span class="label">资产编号</span>
          <span class="value">21549794646</span>
        </div>
      </div>

      <div class="tr">
        <div class="item">
          <span class="label">资产名称</span>
          <span class="value">小车库</span>
        </div>
        <div class="item">
          <span class="label">资产名称</span>
          <span class="value">小车库</span>
        </div>
      </div>

      <div class="tr">
        <div class="item">
          <span class="label">计量单位</span>
          <span class="value">平方米</span>
        </div>
        <div class="item">
          <span class="label">计量单位</span>
          <span class="value">平方米</span>
        </div>
      </div>
      <div class="tr">
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
      </div>
      <div class="tr">
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
      </div>
      <div class="tr">
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
      </div>
      <div class="tr">
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
      </div>
      <div class="tr">
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
        <div class="item">
          <span class="label">投产日期</span>
          <span class="value">2021-12-01</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HouseInfo"></script>

<style scoped lang="scss">
* {
  flex-shrink: 0;
}
.house_info_root {
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

  .content {
    width: 100%;
    flex: 1 0;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .tr {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(57, 158, 233, 0.4);

      .item {
        flex: 1 0;
        height: 100%;
        display: flex;
        align-items: center;

        .label {
          width: 60px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(145, 204, 255, 1);
          text-align-last: justify;
        }

        .value {
          margin-left: 10px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>
