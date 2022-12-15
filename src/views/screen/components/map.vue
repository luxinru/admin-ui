<template>
  <div class="map_root" id="map"></div>
</template>

<script setup name="Map">
const initMap = () => {
  const Bmap = window.BMap;
  const map = new BMap.Map("map"); // 创建Map实例
  map.setMapType(BMAP_HYBRID_MAP);
  map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
  map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
  map.enableKeyboard(); //启用键盘上下左右键移动地图
  map.centerAndZoom(new Bmap.Point(104.04263635868074, 30.556100647961866), 11);
  const mapPoints = [
    { x: 30.556100647961866, y: 104.04263635868074 },
    { x: 30.686100237962366, y: 104.0826363586234 },
    { x: 30.486100237962366, y: 104.0326363586234 },
    { x: 30.386100237962366, y: 104.0726363586234 },
    { x: 30.286100237962366, y: 104.0626363586234 },
  ];
  let i = 0;
  // 函数 创建多个标注
  for (; i < mapPoints.length; i++) {
    let points = new BMap.Point(mapPoints[i].y, mapPoints[i].x); //创建坐标点
    if (i > 2) {
      let icon = new BMap.Icon(
        "/images/position-1.png",
        new BMap.Size(67, 108)
      );
      let markers = new BMap.Marker(points, {
        icon,
      });
      map.addOverlay(markers);
    } else {
      let icon = new BMap.Icon(
        "/images/position-2.png",
        new BMap.Size(67, 108)
      );
      let markers = new BMap.Marker(points, {
        icon,
      });
      map.addOverlay(markers);
    }
  }
};

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      initMap();
    }, 1000);
  });
});
</script>

<style scoped lang="scss">
.map_root {
  width: 100%;
  height: 100%;
}
</style>
