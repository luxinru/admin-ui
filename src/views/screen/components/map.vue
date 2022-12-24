<template>
  <div class="map_root" id="map"></div>
</template>

<script>
import bus from "vue3-eventbus";
import { fetchVisualList } from "@/api/screen";
import useScreenStore from "@/store/modules/screen";

export default {
  name: "Map",

  data() {
    return {
      map: {},
    };
  },

  mounted() {
    const self = this;
    this.$nextTick(() => {
      bus.on("onDepartChange", (depart) => {
        self.fetchVisualListFun(depart);
      });
    });
  },

  methods: {
    initMap(list) {
      const Bmap = window.BMap;
      this.map = new BMap.Map("map"); // 创建Map实例
      this.map.setMapType(BMAP_HYBRID_MAP);
      this.map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      this.map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      this.map.enableKeyboard(); //启用键盘上下左右键移动地图
      this.map.centerAndZoom(
        new Bmap.Point(104.04263635868074, 30.556100647961866),
        13
      );

      // this.map.setDisplayOptions({
      //   poi: false,
      // });

      // 函数 创建多个标注
      for (let i = 0; i < list.length; i++) {
        let points = new BMap.Point(list[i].longitude, list[i].latitude); //创建坐标点
        let icon = new BMap.Icon(
          "/images/position-2.png",
          new BMap.Size(67, 108)
        );
        let markers = new BMap.Marker(points, {
          icon,
        });

        markers.addEventListener("click", () => {
          localStorage.setItem("currentHouse", JSON.stringify(list[i]));
          bus.emit("onTopbarClick", 2);
          bus.emit("onMapItemClick", list[i]);
        });

        this.map.addOverlay(markers);

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

      bus.on("onMapItemClick", (data) => {
        this.map.centerAndZoom(
          new Bmap.Point(data.longitude, data.latitude),
          15
        );
      });
    },

    async fetchVisualListFun(depart) {
      const { rows } = await fetchVisualList({
        houseName: "",
        houseCode: "",
        departCode: depart.departCode,
        // departCode: "226010006",
        assetsCode: "",
      });

      const list = rows.filter((item) => item.longitude && item.latitude);
      useScreenStore().setHouseList(list);

      this.initMap(list);
    },
  },
};
</script>

<style scoped lang="scss">
.map_root {
  width: 100%;
  height: 100%;
}
</style>
