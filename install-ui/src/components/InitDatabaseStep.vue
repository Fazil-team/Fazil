<template>
  <div>
    <a-result status="info" title="是否初始化数据库？">
      <template #extra>
        <a-space>
          <a-button @click="$emit('back')">上一步</a-button>
          <a-button type="primary" @click="$emit('install')">开始安装</a-button>
        </a-space>
      </template>
    </a-result>
  </div>
</template>