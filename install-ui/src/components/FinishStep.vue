<template>
  <a-result status="success" title="安装完成！">
    <template #extra>
      前台地址：<a-link :href="getUrl()+'/ui'">{{ getUrl() }}/ui</a-link> <br>
      后台地址：<a-link :href="getUrl()+'/admin'">{{ getUrl() }}/admin</a-link>
    </template>
  </a-result>
</template>

<script setup>
const props = defineProps(['formData']);
const goHome = () => {
  window.location.href = '/';
};
const getUrl = ()=>{
  let domain = props.formData.domain;
  if(domain.endsWith("/")) domain = domain.substring(0, domain.length() - 1)
  return domain
}

</script>
