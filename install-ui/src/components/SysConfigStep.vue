<template>
  <a-form layout="vertical" @submit="submit" :model="formData">
    <a-form-item label="应用端口" :rules="[{required:true,message:'请填写应用端口'}]"
                 field="app_port" validate-trigger="change">
      <a-input-number v-model="formData.app_port" placeholder="例如：8080" :min="1" :max="65535"/>
    </a-form-item>
    <a-form-item label="数据存储位置" :rules="[{required:true,message:'请填写数据存储位置'}]"
                 field="data_dir" validate-trigger="change">
      <a-input v-model="formData.data_dir" />
    </a-form-item>
    <a-form-item label="是否开启Ffmpeg转码">
      <a-switch v-model="formData.ffmpeg"/>
    </a-form-item>
    <a-form-item v-if="formData.ffmpeg" label="Ffmpeg可执行目录(bin目录)" :rules="[{required:true,message:'请填写Ffmpeg可执行目录'}]"
                 field="ffmpeg_bin_dir" validate-trigger="change">
      <a-input v-model="formData.ffmpeg_bin_dir"/>
    </a-form-item>
    <a-form-item  label="数据存储位置" :rules="[{required:true,message:'请填写应用端口'}]"
                 field="app_port" validate-trigger="change">
      <a-input-number v-model="formData.app_port" placeholder="例如：8080" :min="1" :max="65535"/>
    </a-form-item>
    <a-form-item label="管理员用户名" :rules="[{required:true,message:'请填写管理员用户名'}]"
                 field="admin_username" validate-trigger="change">
      <a-input v-model="formData.admin_username"/>
    </a-form-item>
    <a-form-item label="管理员密码" :rules="[{required:true,message:'请填写管理员密码'}]"
                 field="admin_password" validate-trigger="change">
      <a-input-password v-model="formData.admin_password" />
    </a-form-item>
    <a-space>
      <a-button @click="$emit('back')">上一步</a-button>
      <a-button type="primary" html-type="submit">下一步</a-button>
    </a-space>
  </a-form>
</template>

<script setup>
const props = defineProps(['formData']);
const emits = defineEmits(['next'])
const submit = ({values, errors}) => {
  if(errors === undefined){
    emits('next')
  }
}
</script>