<template>
  <a-form layout="vertical" @submit="submit" :model="formData">
    <a-form-item label="Redis地址"
                 :rules="[{required:true,message:'请填写Redis地址'}]"
                 field="redis_host" validate-trigger="change">
      <a-input v-model="formData.redis_host" placeholder="例如：localhost"/>
    </a-form-item>
    <a-form-item label="Redis端口" :rules="[{required:true,message:'请填写Redis端口'}]"
                 field="redis_port" validate-trigger="change">
      <a-input-number v-model="formData.redis_port" :min="1" :max="65535"/>
    </a-form-item>
    <a-form-item label="Redis用户名"
                 field="redis_username" validate-trigger="change">
      <a-input v-model="formData.redis_username" placeholder="没有可以不填写"/>
    </a-form-item>
    <a-form-item label="Redis密码" :rules="[{required:true,message:'请填写Redis密码'}]"
                 field="redis_password" validate-trigger="change">
      <a-input-password v-model="formData.redis_password"/>
    </a-form-item>
    <a-space>
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