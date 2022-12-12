<template>
    <div class="box">
        <!-- 左侧区域 -->
        <div style = "width: 25%;height: 100%;">
            <!-- 左侧一位 -->
            <div style = "width: 100%;height: 33.3%;border: solid 0.5px #1f2d3d;">
                <ul style="width: 100%;height: 100%;padding-left: 0px;margin: 0px;">
                    <li style="width: 100%;height: 25%;border: solid 0.5px #1f2d3d;">
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                油气水井（个）
                            </div>
                            <div style="text-align: center">
                                1143
                            </div>
                        </div>
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                总价值（万元）
                            </div>
                            <div style="text-align: center">
                                1234.01
                            </div>
                        </div>
                    </li>
                    <li style="width: 100%;height: 25%;border: solid 0.5px #1f2d3d;">
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                场站（座）
                            </div>
                            <div style="text-align: center">
                                832
                            </div>
                        </div>
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                总价值（万元）
                            </div>
                            <div style="text-align: center">
                                877.54
                            </div>
                        </div>
                    </li>
                    <li style="width: 100%;height: 25%;border: solid 0.5px #1f2d3d;">
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                净化装置（个）
                            </div>
                            <div style="text-align: center">
                                1143
                            </div>
                        </div>
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                总价值（万元）
                            </div>
                            <div style="text-align: center">
                                1244.68
                            </div>
                        </div>
                    </li>
                    <li style="width: 100%;height: 25%;border: solid 0.5px #1f2d3d;">
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                管线（千米）
                            </div>
                            <div style="text-align: center">
                                8799
                            </div>
                        </div>
                        <div style="width: 50%;float: left;">
                            <div style="text-align: center;font-size: 12px;">
                                总价值（万元）
                            </div>
                            <div style="text-align: center">
                                55977.64
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 左侧二位 -->
            <div style = "width: 100%;height: 33.3%;border: solid 0.5px #1f2d3d;">
                <div id="assetsProportion" ref="assetsProportion" style="width: 100%;height:100%;" >

                </div>
            </div>
            <!-- 左侧三位 -->
            <div style = "width: 100%;height: 33.3%;border: solid 0.5px #1f2d3d;">
                <div id="depletionAmount" ref="depletionAmount" style="width: 100%;height:100%;" >

                </div>
            </div>
        </div>
        <!-- 中部区域 -->
        <div style = "width: 50%;height: 100%;">
            <!-- 中部一位 -->
            <div style = "background-color: yellow;width: 100%;height: 66.6%;border: solid 0.5px #1f2d3d;">

            </div>
            <!-- 中部二位 -->
            <div style = "width: 100%;height: 33.3%;border: solid 0.5px #1f2d3d;">
                <div id="reserves" ref="reserves" style="width: 100%;height:100%;" >

                </div>
            </div>
        </div>
        <!-- 右侧区域 -->
        <div style = "width: 25%;height: 100%;">
            <!-- 右侧一位 -->
            <div style = "width: 100%;height: 33.3%;border: solid 0.5px #1f2d3d;">
                <div id="projectMoney" ref="projectMoney" style="width: 100%;height:100%;" >

                </div>
            </div>
            <!-- 右侧二位 -->
            <div style = "width: 100%;height: 33.3%;border: solid 0.5px #1f2d3d;">
                <div id="moneyChange" ref="moneyChange" style="width: 100%;height:100%;" >

                </div>
            </div>
            <!-- 右侧三位 -->
            <div style = "width: 100%;height: 33.3%;border: solid 0.5px #1f2d3d;">
                <div id="businessStatistics" ref="businessStatistics" style="width: 100%;height:100%;" >

                </div>
            </div>
        </div>
    </div>
</template>
 
<script setup>
    import { ref, reactive, defineExpose, watch, onMounted, 		 inject } from 'vue'
    import * as echarts from 'echarts'
    onMounted(() => {
        const assetsProportionDiv = document.getElementById('assetsProportion')
        const assetsProportion = echarts.init(assetsProportionDiv)
        // 绘制图表
        assetsProportion.setOption({
            title: {
                text: '资产类型统计',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                bottom: 'bottom'
            },
            series: [
                {
                    name: '资产类型统计',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 20, name: '在账固定' },
                        { value: 45, name: '在账无形' },
                        { value: 15, name: '实物有形' },
                        { value: 20, name: '实物无形' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })

        const depletionAmountDiv = document.getElementById('depletionAmount')
        const depletionAmount = echarts.init(depletionAmountDiv)
        // 绘制图表
        depletionAmount.setOption({
            title: {
                text: '折耗金额',
                left: 'center'
            },
            dataset: {
                source: [
                    ['product', '当月', '上月', '上上月'],
                    ['区块1', 4.3, 2.4, 2],
                    ['区块2', 2.5, 4.4, 2],
                    ['区块3', 3.5, 1.8, 3],
                    ['区块4', 4.5, 2.8, 5]
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        })

        const reservesDiv = document.getElementById('reserves')
        const reserves = echarts.init(reservesDiv)
        // 绘制图表
        reserves.setOption({
            title: {
                text: '油气产量'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['气产量', '油产量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月份', '2月份', '3月份', '4月份']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '气产量',
                    type: 'line',
                    stack: 'Total',
                    data: [3, 5, 7, 8]
                },
                {
                    name: '油产量',
                    type: 'line',
                    stack: 'Total',
                    data: [5, 1, 3, 5]
                }
            ]
        })

        const projectMoneyDiv = document.getElementById('projectMoney')
        const projectMoney = echarts.init(projectMoneyDiv)
        // 绘制图表
        projectMoney.setOption({
            title: {
                text: '项目金额统计',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                bottom: 'bottom'
            },
            series: [
                {
                    name: '资产类型统计',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 20, name: '基建项目' },
                        { value: 45, name: '自有资金' },
                        { value: 15, name: '大修项目' },
                        { value: 20, name: '弃置费用' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })

        const moneyChangeDiv = document.getElementById('moneyChange')
        const moneyChange = echarts.init(moneyChangeDiv)
        // 绘制图表
        moneyChange.setOption({
            title: {
                text: '折耗金额',
                left: 'center'
            },
            dataset: {
                source: [
                    ['product', '当月', '上月', '上上月'],
                    ['转资', 4.3, 2.4, 2],
                    ['价格调整', 2.5, 4.4, 2],
                    ['减少', 3.5, 1.8, 3],
                    ['调拨', 4.5, 2.8, 5],
                    ['报废', 4.5, 2.8, 5]
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        })

        const businessStatisticsDiv = document.getElementById('businessStatistics')
        const businessStatistics = echarts.init(businessStatisticsDiv)
        // 绘制图表
        businessStatistics.setOption({
            title: {
                text: '业务数量统计',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'horizontal',
                bottom: 'bottom'
            },
            series: [
                {
                    name: '资产类型统计',
                    type: 'pie',
                    radius: '45%',
                    data: [
                        { value: 20, name: '转资' },
                        { value: 45, name: '调拨' },
                        { value: 15, name: '价值调整' },
                        { value: 20, name: '报废' },
                        { value: 20, name: '处置' },
                        { value: 20, name: '分解' },
                        { value: 20, name: '合并' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
    })

</script>

<style lang='postcss'>
    .box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        position: absolute;
    }
    .box > div {
        height: 100%;
    }
</style>