<template>
  <div class="map_root" id="map"></div>
</template>

<script setup name="Map">
import bus from "vue3-eventbus";

import { fetchVisualList } from "@/api/screen";
import useScreenStore from '@/store/modules/screen'

const initMap = (list) => {
  const Bmap = window.BMap;
  const map = new BMap.Map("map"); // 创建Map实例
  map.setMapType(BMAP_HYBRID_MAP);
  map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
  map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
  map.enableKeyboard(); //启用键盘上下左右键移动地图
  map.centerAndZoom(new Bmap.Point(104.04263635868074, 30.556100647961866), 13);

  // 函数 创建多个标注
  for (let i = 0; i < list.length; i++) {
    let points = new BMap.Point(list[i].longitude, list[i].latitude); //创建坐标点
    let icon = new BMap.Icon("/images/position-2.png", new BMap.Size(67, 108));
    let markers = new BMap.Marker(points, {
      icon,
    });

    markers.addEventListener('click', () => {
      bus.emit('onTopbarClick', 2)
    })

    map.addOverlay(markers);

    // if (i > 2) {
    //   let icon = new BMap.Icon(
    //     "/images/position-1.png",
    //     new BMap.Size(67, 108)
    //   );
    //   let markers = new BMap.Marker(points, {
    //     icon,
    //   });
    //   map.addOverlay(markers);
    // } else {
    //   let icon = new BMap.Icon(
    //     "/images/position-2.png",
    //     new BMap.Size(67, 108)
    //   );
    //   let markers = new BMap.Marker(points, {
    //     icon,
    //   });
    //   map.addOverlay(markers);
    // }
  }
};

async function fetchVisualListFun() {
  const { rows } = await fetchVisualList({
    houseName: "",
    houseCode: "",
    departCode: "",
    assetsCode: "",
  });

  const list = rows.filter((item) => item.longitude && item.latitude);
  useScreenStore().setHouseList(list)

  initMap(list);
}

onMounted(() => {
  nextTick(() => {
    fetchVisualListFun();
  });
});
</script>

<style scoped lang="scss">
.map_root {
  width: 100%;
  height: 100%;
}
</style>
