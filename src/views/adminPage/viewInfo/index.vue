<template>
  <el-table
    v-loading="loading"
    :data="admin_info"
    style="width: 100vw"
    max-height="900"
  >
    <el-table-column
      header-align="center"
      type="selection"
      width="55"
      align="center"
    />
    <el-table-column fixed prop="id" label="ID" width="60" align="center" />
    <el-table-column
      prop="admin_name"
      label="User_name"
      width="150"
      align="center"
    />
    <el-table-column
      prop="nick_name"
      label="Authority"
      width="105"
      align="center"
    />
    <el-table-column
      prop="password"
      label="Password"
      width="105"
      align="center"
    />
    <el-table-column prop="email" label="Email" width="105" align="center" />
    <el-table-column
      fixed="right"
      label="Operations"
      width="300"
      align="center"
    >
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="default"
          @click.prevent="remove_(scope.$index)"
        >
          Remove
        </el-button>
        <el-button
          link
          type="primary"
          size="default"
          @click.prevent="setAuthority(scope.$index)"
        >
          setAuthority
        </el-button>
        <el-dropdown :hide-on-click="false">
          <el-button link type="primary" size="default" class="el"> modify </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-button
                  link
                  type="primary"
                  size="default"
                  @click.prevent="updateInfo(scope.$index)"
                  >修改信息
                </el-button>
              </el-dropdown-item>

              <el-dropdown-item>
                <el-button
                  link
                  type="primary"
                  size="default"
                  @click.prevent="updatePassword_(scope.$index)"
                  >修改密码
                </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </template>
    </el-table-column>
  </el-table>
  
  <modifyInfo
    :adminInfo="admin_info[index]"
    :visible="modifyInfoVisible"
    :index="index"
    @changeVisible="changeVisible"
  ></modifyInfo>

  <modifyPass
    :adminInfo="admin_info[index]"
    :visible="modifyPassVisible"
    :index="index"
    @changeVisible="changeVisible"
  ></modifyPass>

  <authority
    :adminInfo="admin_info[index]"
    :visible="setVisible"
    :index="index"
    @changeVisible="changeVisible"
  ></authority>
  <pageination
    :total="total"
    :pageSize="page.page_size"
    @changePage="changePage"
  ></pageination>
</template>
<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import pageination from "@/components/Pageination/index.vue";
import { deleteAdminAccount_ } from "@/request/request";
import { remove } from "@/utils/deleteInfo";
import { setAdminAuthority } from "@/utils/setAdminAutority";
import authority from "@/components/setAuthority/index.vue";
import modifyInfo from "@/components/modifyAdmin/infoIndex.vue";
import modifyPass from '@/components/modifyAdmin/passIndex.vue'
import { deleteAdminAccount } from "@/request/admin";
import { ElMessage, ElMessageBox } from "element-plus";
import { get_info } from "@/utils/getInfo";
const total = ref(10);
const page = reactive({
  page: 1,
  page_size: 10,
});
const loading = ref(true);
const setVisible = ref(false); //设置信息的可见
const modifyInfoVisible = ref(false); //修改信息的可见
const modifyPassVisible = ref(false)

let admin_info = ref([]);
let index = ref(1);

const remove_ = (index) => {
  //删除信息
  remove(admin_info.value, index);
};

const updateInfo = (index_) => {
  //修改信息
  modifyInfoVisible.value = !modifyInfo.value
  index.value = index_
};

const updatePassword_ = (index_) => {
    modifyPassVisible.value = !modifyPassVisible.value
    index.value = index_
}
const setAuthority = (index_) => {
  //设置权限
  setVisible.value = !setVisible.value;
  index.value = index_
};

const changeVisible = (num) => {
  //改变可见度
  if (num === 1) modifyInfoVisible.value = !modifyInfoVisible.value
  else if (num === 2) setVisible.value = !setVisible.value
  else modifyPassVisible.value = !modifyPassVisible.value
};

onBeforeMount(() => {
  get_info_();
});

const get_info_ = () => {
  //得到管理员信息
  setTimeout(() => {
    loading.value = false;
  }, 2000);
  get_info("/admin/getAdminInfoList", page, admin_info, total);
};

const changePage = (page_) => {
  //分页操作
  page.page = page_;
  loading.value = true;
  get_info_();
};
</script>

<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.el {
    margin: 1px 10px;
    font-size: 16px;
}
</style>