<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <slot name="header"></slot>
      </div>
    </template>
    <div class="card_content">
      <slot name="content" class="content"></slot>
      <slot name="compared" class="content_compared"></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

<style>
.box-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  line-height: 20px !important;
  font-size: 16px;
  font-weight: 400;
}

.box-card .card_content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.box-card .card_content .content {
  font-size: 22px;
  font-weight: 700;
}

.box-card .card_content .content_compared {
  color: #7c7c7c;
  font-size: 12px;
}
</style>
