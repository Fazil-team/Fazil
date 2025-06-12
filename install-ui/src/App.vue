<template>
  <div class="install-container">
    <div>
      <img src="@/assets/logo.png" alt="" width="200">
    </div>
    <a-spin dot :loading="loading" tip="正在初始化，请稍后">

      <a-card title="Fazil 安装向导" style="width: 50rem">
        <a-steps :current="currentStep">
          <a-step title="Redis配置" />
          <a-step title="MySQL配置" />
          <a-step title="参数配置" />
          <a-step title="初始化数据库" />
          <a-step title="完成安装" />
        </a-steps>

        <div class="mt-8">
          <component :is="stepComponents[currentStep-1]"
                     :formData="formData"
                     @next="nextStep"
                     @back="prevStep"
                     @install="submitInstall"/>
        </div>
      </a-card>
    </a-spin>

  </div>

</template>

<script setup>
import { ref } from 'vue';
import { Message } from '@arco-design/web-vue';
import DatabaseConfigStep from '@/components/DatabaseConfigStep.vue';
import InitDatabaseStep from '@/components/InitDatabaseStep.vue';
import FinishStep from '@/components/FinishStep.vue';
import RedisConfigStep from "@/components/RedisConfigStep.vue";
import SysConfigStep from "@/components/SysConfigStep.vue";
import axios from "axios";
const loading = ref(false)
const currentStep = ref(1);
const formData = ref({
  redis_host: '',
  redis_port: 6379,
  redis_username: '',
  redis_password: '',
  mysql_host: '',
  mysql_port: 3306,
  mysql_db_name: 'fazil_db',
  mysql_username: '',
  mysql_password: '',
  app_port: 8080,
  admin_username: '',
  admin_password: '',
  ffmpeg: false,
  ffmpeg_bin_dir: '',
  data_dir: '',
  domain: ''
});

const stepComponents = [
  RedisConfigStep,
  DatabaseConfigStep,
  SysConfigStep,
  InitDatabaseStep,
  FinishStep
];

const nextStep = () => currentStep.value++;
const prevStep = () => currentStep.value--;

const submitInstall = async () => {
  console.log(formData.value)
  loading.value = true;
  axios.post("/install", formData.value).then(res=>{
    if(res.data.code == 1){
      Message.error({
        content: res.data.msg
      })
    }else {
      nextStep();
    }
    loading.value = false;
  })
};
</script>

<style scoped>
.install-container{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
}
.mt-8{
  margin-top: 1rem;
}
</style>
