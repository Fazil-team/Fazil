<template>
  <a-form :model="formData" layout="vertical" @submit="submit">
    <a-form-item label="MySQL地址" :rules="[{required:true,message:'请填写MySQL地址'}]"
                 field="mysql_host" validate-trigger="change">
      <a-input v-model="formData.mysql_host" placeholder="例如：localhost" />
    </a-form-item>
    <a-form-item label="MySQL端口" :rules="[{required:true,message:'请填写MySQL端口'}]"
                 field="mysql_port" validate-trigger="change">
      <a-input-number v-model="formData.mysql_port" :min="1" :max="65535" />
    </a-form-item>
    <a-form-item label="MySQL数据库名" :rules="[{required:true,message:'请填写MySQL数据库名'}]"
                 field="mysql_db_name" validate-trigger="change">
      <a-input v-model="formData.mysql_db_name" placeholder="例如：myapp" />
    </a-form-item>
    <a-form-item label="MySQL用户名" :rules="[{required:true,message:'请填写MySQL用户名'}]"
                 field="mysql_username" validate-trigger="change">
      <a-input v-model="formData.mysql_username" />
    </a-form-item>
    <a-form-item label="MySQL密码" :rules="[{required:true,message:'请填写MySQL密码'}]"
                 field="mysql_password" validate-trigger="change">
      <a-input-password v-model="formData.mysql_password" />
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