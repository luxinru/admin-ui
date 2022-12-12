<template>
    <div class="app-container">
        <!-- 公共资产选择对话框 -->
        <el-dialog :title="title" v-model="show" width="80%" draggable append-to-body>

            <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
                <el-form-item label="资产编码" prop="assetsCode">
                    <el-input v-model="queryParams.assetsCode" placeholder="请输入资产编码" clearable
                        @keyup.enter="handleQuery" />
                </el-form-item>
                <el-form-item label="资产名称" prop="assetsName">
                    <el-input v-model="queryParams.assetsName" placeholder="请输入资产名称" clearable
                        @keyup.enter="handleQuery" />
                </el-form-item>
                <!-- <el-form-item label="资产名称" prop="dataLevel">
                        <el-select v-model="queryParams.dataLevel" placeholder="定义级别" clearable size="small"
                            style="width: 240px">
                            <el-option v-for="dict in dict.type.sys_data_level" :key="dict.value" :label="dict.label"
                                :value="dict.value" />
                        </el-select>
                    </el-form-item> -->
                <el-form-item label="所属单位" prop="departName">
                    <el-input v-model="queryParams.departName" placeholder="请输入单位" clearable
                        @keyup.enter="handleQuery" />
                </el-form-item>
                <el-form-item label="保管人" prop="yearMonth">
                    <el-input v-model="queryParams.yearMonth" placeholder="请输入保管人" clearable
                        @keyup.enter="handleQuery" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
                    <el-button icon="Refresh" @click="resetQuery">重置</el-button>
                </el-form-item>
            </el-form>
            <el-row :gutter="10" class="mb8">
                <el-col :span="1.5">
                    <el-button type="primary" plain icon="Plus" @click="screenData" v-hasPermi="['system:detail:add']">
                        筛选条件</el-button>
                </el-col>
                <!-- <el-col :span="1.5">
                    <el-button type="success" plain icon="Edit" @click="toggleSelection(detailList)"
                        v-hasPermi="['system:detail:edit']">全部确定</el-button>
                </el-col>
                <el-col :span="1.5">
                    <el-button type="primary" icon="Delete" :disabled="single" @click="handleDefine"
                        v-hasPermi="['system:detail:remove']">确定</el-button>
                </el-col>
                <el-col :span="1.5">
                    <el-button type="danger" plain icon="Delete" @click="handleRevert"
                        v-hasPermi="['system:detail:remove']">返回</el-button>
                </el-col> -->

                <right-toolbar v-model:showSearch="showSearch" @queryTable="getList" :columns="columns">
                </right-toolbar>
            </el-row>
            <!-- ref="multipleTable"-->
            <el-table v-loading="loading" ref="multipleTable" :data="detailList"
                @selection-change="handleSelectionChange" @row-click="handleTableRow" :height="height">
                <el-table-column type="selection" width="55" align="center" />
                <el-table-column type="index" width="50" align="center" />
                <el-table-column label="单据编码" align="center" key="invoiceNumber" prop="invoiceNumber"
                    v-if="columns[0].visible" />
                <el-table-column label="资产类型" align="center" key="assetsTypeName" prop="assetsTypeName"
                    v-if="columns[1].visible" />
                <el-table-column label="资产编码" align="center" key="assetsCode" prop="assetsCode"
                    v-if="columns[2].visible" />
                <el-table-column label="资产名称" align="center" key="assetsName" prop="assetsName"
                    v-if="columns[3].visible" />
                <el-table-column label="规格型号" align="center" key="assetsStandard" prop="assetsStandard"
                    v-if="columns[4].visible" />
                <el-table-column label="数量" align="center" key="singerAmount" prop="singerAmount"
                    v-if="columns[5].visible" />
                <el-table-column label="原值" align="center" key="orginalValue" prop="orginalValue"
                    v-if="columns[6].visible" />
                <el-table-column label="计量单位" align="center" key="unitCode" prop="unitCode" v-if="columns[7].visible" />
                <el-table-column label="制造厂家" align="center" key="makeFactory" prop="makeFactory"
                    v-if="columns[8].visible" />
                <el-table-column label="出厂日期" align="center" key="productDate" prop="productDate"
                    v-if="columns[9].visible" />
                <el-table-column label="单位编码" align="center" key="departCode" prop="departCode"
                    v-if="columns[10].visible" />
                <el-table-column label="所属单位" align="center" key="departName" prop="departName"
                    v-if="columns[11].visible" />
                <el-table-column label="投产日期" align="center" key="operateDate" prop="operateDate"
                    v-if="columns[12].visible" />
                <el-table-column label="存放(安装)地点" align="center" key="storePlace" prop="storePlace"
                    v-if="columns[13].visible" />
                <el-table-column label="责任人" align="center" key="dutyPerson" prop="dutyPerson"
                    v-if="columns[14].visible" />
                <el-table-column label="增加原因" align="center" key="addReasonName" prop="addReasonName"
                    v-if="columns[15].visible" />
                <el-table-column label="保管人" align="center" key="userPerson" prop="userPerson"
                    v-if="columns[16].visible" />
                <el-table-column label="资产状态" align="center" key="assetsStatusCode" prop="assetsStatusCode"
                    v-if="columns[17].visible" />
                <el-table-column label="设备类型" align="center" key="equipTypeCode" prop="equipTypeCode"
                    v-if="columns[18].visible" />
                <el-table-column label="使用状况" align="center" key="usedState" prop="usedState"
                    v-if="columns[19].visible" />
                <el-table-column label="条码" align="center" key="条码" prop="条码" v-if="columns[20].visible" />

            </el-table>
            <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum"
                v-model:limit="queryParams.pageSize" @pagination="getList" />

            <el-table v-if="hideHouseTable" style="margin-top:40px" v-loading="loading" :data="houseList"
                @selection-change="houseHandleSelectionChange" :height="height">
                <el-table-column type="selection" width="55" align="center" />
                <!-- <el-table-column label="单据编码" align="center" key="invoiceNumber" prop="invoiceNumber"
                    v-if="columns[0].visible" />
                <el-table-column label="资产类型" align="center" key="assetsTypeName" prop="assetsTypeName"
                    v-if="columns[1].visible" />
                <el-table-column label="资产编码" align="center" key="assetsCode" prop="assetsCode"
                    v-if="columns[2].visible" />
                <el-table-column label="资产名称" align="center" key="assetsName" prop="assetsName"
                    v-if="columns[3].visible" />
                <el-table-column label="规格型号" align="center" key="assetsStandard" prop="assetsStandard"
                    v-if="columns[4].visible" />
                <el-table-column label="数量" align="center" key="singerAmount" prop="singerAmount"
                    v-if="columns[5].visible" />
                <el-table-column label="原值" align="center" key="orginalValue" prop="orginalValue"
                    v-if="columns[6].visible" />
                <el-table-column label="计量单位" align="center" key="unitCode" prop="unitCode" v-if="columns[7].visible" />
                <el-table-column label="制造厂家" align="center" key="makeFactory" prop="makeFactory"
                    v-if="columns[8].visible" />
                <el-table-column label="出厂日期" align="center" key="productDate" prop="productDate"
                    v-if="columns[9].visible" />
                <el-table-column label="单位编码" align="center" key="departCode" prop="departCode"
                    v-if="columns[10].visible" />
                <el-table-column label="所属单位" align="center" key="departName" prop="departName"
                    v-if="columns[11].visible" />
                <el-table-column label="投产日期" align="center" key="operateDate" prop="operateDate"
                    v-if="columns[12].visible" />
                <el-table-column label="存放(安装)地点" align="center" key="storePlace" prop="storePlace"
                    v-if="columns[13].visible" />
                <el-table-column label="责任人" align="center" key="dutyPerson" prop="dutyPerson"
                    v-if="columns[14].visible" />
                <el-table-column label="增加原因" align="center" key="addReasonName" prop="addReasonName"
                    v-if="columns[15].visible" />
                <el-table-column label="保管人" align="center" key="userPerson" prop="userPerson"
                    v-if="columns[16].visible" />
                <el-table-column label="资产状态" align="center" key="assetsStatusCode" prop="assetsStatusCode"
                    v-if="columns[17].visible" />
                <el-table-column label="设备类型" align="center" key="equipTypeCode" prop="equipTypeCode"
                    v-if="columns[18].visible" />
                <el-table-column label="使用状况" align="center" key="usedState" prop="usedState"
                    v-if="columns[19].visible" /> -->
                <el-table-column label="条码" align="center" key="pkKeyCode" prop="pkKeyCode" />

            </el-table>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="nainHandleDefine">确 定</el-button>
                    <el-button @click="mainCancel">取 消</el-button>
                </div>
            </template>

            <template>
                <el-dialog v-model="innerOpen" width="50%" draggable title="条件配置" append-to-body>
                    <el-checkbox-group v-model="checkedlabel" @change="handleCheckedCitiesChange">
                        <!-- <el-checkbox v-for="city in cities" :key="city" :label="city">{{
                                city
                        }}</el-checkbox> -->
                        <el-checkbox v-for="city in checkCodes" :key="city.value" :label="city.label">{{
                                city.label
                        }}</el-checkbox>
                    </el-checkbox-group>
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                        <el-tab-pane label="筛选条件" name="first">
                            <el-row :gutter="10" class="mb8">
                                <el-col :span="1.5">
                                    <el-button type="primary" text @click="lineHandleAdd">新增
                                    </el-button>
                                </el-col>
                                <!-- <el-col :span="1.5">
                                    <el-button type="danger" text @click="lineHandleDel">删除</el-button>
                                </el-col> -->
                            </el-row>

                            <el-table :data="lineConditionData" :height="390" @cell-click="openEidt">
                                <el-table-column label="条件列" align="center" key="conLine" prop="conLine"
                                    v-if="columns[0].visible">

                                    <template #default="scope">
                                        <el-select filterable v-model="scope.row.conLine" placeholder="可搜索"
                                            v-if="scope.row.iseditorX" @change="columnSelectEdit(scope)">
                                            <el-option v-for="item in cities" :key="item.value" :label="item.label"
                                                :value="item.value">
                                                <span style="float: left">{{ item.label }}</span>
                                                <span
                                                    style="float: right;color: var(--el-text-color-secondary);font-size: 13px;">{{
                                                            item.value
                                                    }}</span>
                                            </el-option>
                                        </el-select>



                                        <!-- <el-input type="text" v-model="scope.row.conLine" v-if="scope.row.iseditorX"
                                            @blur="columnEdit(scope)" v-focus />-->

                                        <span v-else="scope.row.iseditorX">{{ scope.row.conLine }}</span>
                                    </template>

                                </el-table-column>
                                <el-table-column label="条件符" align="center" key="conTag" prop="conTag"
                                    v-if="columns[2].visible">
                                    <template #default="scope">

                                        <el-select v-model="scope.row.conTag" v-if="scope.row.iseditorY"
                                            @change="columnSelectEdit(scope)" class="m-2" placeholder="请选择">
                                            <el-option v-for="item in lineList" :key="item.value" :label="item.label"
                                                :value="item.value" />
                                        </el-select>

                                        <span v-else="scope.row.iseditorY">{{ scope.row.conTag }}</span>
                                    </template>
                                </el-table-column>

                                <el-table-column label="条件值" align="center" key="conValue" prop="conValue"
                                    v-if="columns[2].visible">
                                    <template #default="scope">

                                        <el-input type="text" v-model="scope.row.conValue" v-if="scope.row.iseditorZ"
                                            @blur="columnEdit(scope)" v-focus />

                                        <span v-else="scope.row.iseditorZ">{{ scope.row.conValue }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="逻辑符" align="center" key="conLogical" prop="conLogical"
                                    v-if="columns[2].visible">
                                    <template #default="scope">

                                        <el-select v-model="scope.row.conLogical" v-if="scope.row.iseditorU"
                                            @change="columnSelectEdit(scope)" class="m-2" placeholder="请选择">
                                            <el-option v-for="item in logicalList" :key="item.value" :label="item.label"
                                                :value="item.value" />
                                        </el-select>

                                        <span v-else="scope.row.iseditorU">{{ filters(scope.column,
                                                scope.row.conLogical)
                                        }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" align="center" width="180">
                                    <template #default="scope">
                                        <el-button type="danger" text
                                            @click="columnDel(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>


                                <!-- <el-table-column label="条件列" align="center" key="assetsTypeName" prop="assetsTypeName"
                                    v-if="columns[1].visible" /> -->
                                <!-- <el-table-column label="条件符" align="center" key="assetsCode" prop="assetsCode"
                                    v-if="columns[2].visible" />
                                <el-table-column label="条件值" align="center" key="assetsName" prop="assetsName"
                                    v-if="columns[3].visible" />
                                <el-table-column label="括号" align="center" key="assetsStandard" prop="assetsStandard"
                                    v-if="columns[4].visible" />
                                <el-table-column label="逻辑符" align="center" key="singerAmount" prop="singerAmount"
                                    v-if="columns[5].visible" /> -->
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="资产编码" name="second">
                            <el-input v-model="textarea1" :rows="20" type="textarea" placeholder="Please input" />
                        </el-tab-pane>
                        <el-tab-pane label="原资产编码" name="third">
                            <el-input v-model="textarea2" :rows="20" type="textarea" placeholder="Please input" />
                        </el-tab-pane>

                    </el-tabs>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button type="primary" @click="handleDefine">确 定</el-button>
                            <el-button @click="cancel">取 消</el-button>
                        </div>
                    </template>
                </el-dialog>
            </template>
        </el-dialog>
    </div>
</template>

<script setup name="ChoiceDetail">
import { getToken } from "@/utils/auth";
import { listDetail, listHouse } from "@/api/account/choose/detail";
import { iteratee, reduce, sortedUniq } from "lodash";
import { ref } from "vue";

const textarea1 = ref()
const textarea2 = ref()

const { proxy } = getCurrentInstance();
const loading = ref(true);
const total = ref(0);
const showSearch = ref(true);
// const show = ref(true);
const height = ref("250");
const detailList = ref([]);
//隐藏table
const hideHouseTable = ref(true);
const innerOpen = ref(true);


//创建两个数组存数据 和 存keyCode
const mainDataList = ref([]);
const keyCodeList = ref([]);

//接收房屋明细数组
const houseList = ref([]);

const mainHouseList = ref([]);

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    dieAway: {
        type: String,
        default: "rent"

    }
});

const activeName = ref('first');
const emit = defineEmits(['update:show', 'get:data']);
//传递给父组件

// 列信息
const columns = ref([
    { key: 0, label: `单据编码`, visible: true },
    { key: 1, label: `资产类型`, visible: true },
    { key: 2, label: `资产编码，`, visible: true },
    { key: 3, label: `资产名称`, visible: true },
    { key: 4, label: `规格型号`, visible: true },
    { key: 5, label: `数量`, visible: true },
    { key: 6, label: `原值`, visible: true },
    { key: 7, label: `计量单位`, visible: true },
    { key: 8, label: `制造厂家`, visible: true },
    { key: 9, label: `出厂日期`, visible: true },
    { key: 10, label: `单位编码`, visible: true },
    { key: 11, label: `所属单位`, visible: true },
    { key: 12, label: `投产日期`, visible: true },
    { key: 13, label: `存放(安装)地点`, visible: true },
    { key: 14, label: `责任人`, visible: true },
    { key: 15, label: `增加原因`, visible: true },
    { key: 16, label: `保管人`, visible: true },
    { key: 17, label: `资产状态`, visible: true },
    { key: 18, label: `设备类型`, visible: true },
    { key: 19, label: `使用状况`, visible: true },
    { key: 20, label: `条码`, visible: true },
]);

const data = reactive({
    form: {},
    queryParams: {
        pageNum: 1,
        pageSize: 10,
        detailParam: "real",
        departCode: "",
        assetsTypes: ['0301'],
        sql: '',

    },
});

const { queryParams, form, rules } = toRefs(data);
const { show } = toRefs(props)

/** 查询参数表列表 */
function getList() {

    loading.value = true;
    listDetail(proxy.addDateRange(queryParams.value)).then(response => {
        detailList.value = response.rows;
        total.value = response.total;
        loading.value = false;
    });
};
//选取行和获取数据
function handleTableRow(row, event, column) {


    //如果存在就不添加
    if (!keyCodeList.value.includes(row.keyCode)) {
        keyCodeList.value.push(row.keyCode)
        listHouse(row.keyCode).then(response => {
            response.data.forEach(element => {
                houseList.value.push(element)
            });


        });

    }
    //勾选了点击
    proxy.$refs.multipleTable.toggleRowSelection(row, true);

}
// 多选框选中数据
function handleSelectionChange(selection) {

    if (mainDataList.value.length === 0 && selection.length === 1) {
        mainDataList.value = selection;
        return;
    }
    if (selection.length === 0) {
        keyCodeList.value.splice(0, keyCodeList.value.length)
        houseList.value.splice(0, houseList.value.length)
        mainDataList.value = selection;
        return;
    }

    if (mainDataList.value.length > selection.length) {
        alert("进来")
        console.log(keyCodeList.value)
        const arrCode = []

        selection.forEach(s => {
            arrCode.push(s.keyCode)

        });
        keyCodeList.value = keyCodeList.value.filter(function (item) {
            return !arrCode.includes(item)
        })

        //删除房屋明细
        houseList.value = houseList.value.filter(function (item) {
            return !keyCodeList.value.includes(item.pkKeyCode)
        })

    }
    mainDataList.value = selection;
};

//勾选房屋明细
function houseHandleSelectionChange(selection) {
    mainHouseList.value = selection

}
//给主页面
function mainHandleDefine() {

    const houseMap = {}
    keyCodeList.value.forEach(k => {
        const arr = []
        mainHouseList.value.forEach(h => {
            if (k === h.pkKeyCode) {
                arr.push(h)
            }
        });

        if (arr.length != 0) {
            houseMap[`${k}`] = arr
        }
    });

    const data = {
        list: mainDataList.value,
        houseMap: houseMap
    }
    console.log(data)
    emit('get:data', data);
};

//数据取消
function mainCancel() {
    //传递给父组件
    emit('update:show', false)
    //    show.value=false
    console.log(show.value)
    show.value = false
    proxy.getList();
};


function cancel() {
    open.value = false;
};

/** 搜索按钮操作 */
function handleQuery() {
    queryParams.value.pageNum = 1;
    getList();
};
/** 重置按钮操作 */
function resetQuery() {
    queryParams.value.departCode = '';
    proxy.resetForm("queryRef");
    handleQuery();
};

const checkedlabel = ref(['固定资产'])

const checkCodes = ref([
    {
        label: '固定资产',
        value: '0101'
    },
    {
        label: '油气资产',
        value: '0102'
    }, {
        label: '投资性房地产',
        value: '0103'
    }, {
        label: '无形资产',
        value: '0201'
    }, {
        label: '实物资产',
        value: '0401'
    },
]);
function handleCheckedCitiesChange(value) {

    //后端传的参数
    queryParams.value.assetsCodes.value = checkCodes.value.filter(function (f) {
        return value.includes(f.label)
    }).map(function (o, index) {
        return o.value
    })


}
/**关闭*/
function handleRevert() {

    // props.show = false
    detailList.value = []

};
// 条件列下拉信息
const lineColumns = ref([
    { name: 'depat_code', comment: '单位编码', type: '字符' },
]);
//条件列信息
const lineConditionData = ref([]);
//

//添加
function lineHandleAdd() {
    const lineInfo = reactive({
        conLine: '',
        conTag: '',
        conValue: '',
        conLogical: '',
        iseditor: true
    })
    lineConditionData.value.push(lineInfo)


}

// function cellHandleclick(row, column, cell, event) {
//     row.iseditor=false
//     console.log(row);
//     console.log(column);
//     console.log(cell);
//     console.log(event);
//     //如果规定点击某一列执行，利用column中的label属性
//     if (column.label === '某一列名称') {
//         //执行逻辑
//     }
// }
//删除
function lineHandleDel() {

}

function edit(row, index) {
    row.iseditor = true;
}
function save(row, index) {
    row.iseditor = false;
}

//指令
const vFocus = {
    mounted(el) {
        el.children[0].children[0].focus()
    }
}
//点击获取焦点
function openEidt(row, column, cell, event) {
    console.log("2222")
    if (column.property === 'conLine') {
        row.iseditorX = true
    } else if (column.property === 'conTag') {
        row.iseditorY = true
    } else if (column.property === 'conValue') {
        row.iseditorZ = true
    }
    else if (column.property === 'conLogical') {
        row.iseditorU = true
    }
    else {

        return false
    }

}
//编辑
function columnEdit({ row, column }) {

    if (column.property === 'conLine') {
        row.iseditorX = false
    } else if (column.property === 'conTag') {
        row.iseditorY = false
    } else if (column.property === 'conValue') {
        row.iseditorZ = false
    }
    else if (column.property === 'conLogical') {
        row.iseditorU = false
    }

    else {

        return false
    }

}
//编辑下拉
function columnSelectEdit({ row, column }) {

    if (column.property === 'conLine') {
        row.iseditorX = false
    } else if (column.property === 'conTag') {
        row.iseditorY = false
    } else if (column.property === 'conValue') {
        row.iseditorZ = false
    }
    else if (column.property === 'conLogical') {
        row.iseditorU = false
    }

    else {

        return false
    }
}
//删除
function columnDel(index, row) {

    lineConditionData.value.splice(index, 1)

}

//条件符
const lineList = [
    {
        value: '大于',
        label: '大于',
    },
    {
        value: '小于',
        label: '小于',
    },
    {
        value: '等于',
        label: '等于',
    },
    {
        value: '大于等于',
        label: '大于等于',
    },
    {
        value: '小于等于',
        label: '小于等于',
    },
    {
        value: '不等于',
        label: '不等于',
    },
    {
        value: '包含',
        label: '包含',
    },
    {
        value: '不包含',
        label: '不包含',
    },
    {
        value: '开头是',
        label: '开始是',
    },
    {
        value: '结尾是',
        label: '结尾是',
    },
    {
        value: '开头不是',
        label: '开始不是',
    },
    {
        value: '结尾不是',
        label: '结尾不是',
    },
]

//逻辑符
const logicalList = [
    {
        value: '无',
        label: '无',
    },
    {
        value: 'and',
        label: '且',
    },
    {
        value: 'or',
        label: '或',
    },
]
const cities = [
    {
        value: 'depart_code',
        label: '部门',
    },
    {
        value: 'Shanghai',
        label: 'Shanghai',
    },
    {
        value: 'Nanjing',
        label: 'Nanjing',
    },
    {
        value: 'Chengdu',
        label: 'Chengdu',
    },
    {
        value: 'Shenzhen',
        label: 'Shenzhen',
    },
    {
        value: 'Guangzhou',
        label: 'Guangzhou',
    },
]

function filters(column, name) {

    if (name === '' || name === null) {
        return '';
    }
    console.log(name)
    let txt = "";
    switch (name) {
        case '无':
            txt = "无";
            break;
        case 'and':
            txt = "且";
            break;
        case 'or':
            txt = "或";
            break;

    }
    return txt;
}


//确定条件数组
function handleDefine() {

    let pinsql = ''
    // const param = []
    // let i = 0;
    let _isEnd = false;

    lineConditionData.value.forEach(function (e, index, array) {
        if (e.conLine === '') {
            proxy.$modal.msgError("条件列不能为空");
            _isEnd = true
            return
        }
        if (e.conLogical === '') {
            proxy.$modal.msgError("逻辑符不能为空");
            _isEnd = true
            return
        }
        if (e.conTag === '') {
            proxy.$modal.msgError("条件符不能为空");
            _isEnd = true
            return
        }
        // param.push(e.conValue)
        pinsql += e.conLine + " "

        switch (e.conTag) {
            case '大于': //状态一
                pinsql += '> ' + e.conValue + ' '

                break
            case '小于': //状态二
                pinsql += '< ' + e.conValue + ' '
                X
                break
            case '等于'://状态三
                pinsql += '< ' + e.conValue + ' '

                break
            case '大于等于'://状态三
                pinsql += '>= ' + e.conValue + ' '

                break
            case '小于等于'://状态三
                pinsql += '<= ' + e.conValue + ' '

                break
            case '包含'://状态三
                pinsql += 'like %' + e.conValue + '%' + ' '

                break
            case '不包含'://状态三
                pinsql += 'not like %' + e.conValue + '%' + ' '

                break

            case '开头是'://状态三
                pinsql += 'like %' + e.conValue + ' '

                break
            case '结尾是'://状态三
                pinsql += 'like ' + e.conValue + '%' + ' '

                break
            case '开头不是'://状态三
                pinsql += 'not like %' + e.conValue + ' '

                break
            case '结尾不是'://状态三
                pinsql += 'like ' + e.conValue + '%' + ' '

                break

        }

        if (array.length - 1 === index) {
            return;
        }
        //拼接逻辑符
        pinsql += e.conLogical + ' '


    });

    if (_isEnd) {
        return
    }

    queryParams.value.sql = pinsql
    getList()
    innerOpen.value = false

}


if (props.dieAway == "other") {
    height.value = "500"
    hideHouseTable.value = false
};

//初始化勾选
getList();


</script>

<style>
/* .demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
} */
</style>

<style lang="scss" scoped>
// :deep .el-dialog__title {

//     font-weight: 700;
//     color: #333333;
//     font-size: 20px;
// }
</style>