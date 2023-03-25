<script setup lang="ts">
  import Todo from './views/Todo.vue';
</script>

<template>
  <div class="d-flex flex-column w-100 justify-content-end pr-3 pb-3 g24 align-text">
      <nav class="d-flex g16 text-right">
        <RouterLink to="/Todo" class="f18-400">اضافه کردن تودو</RouterLink>
        <RouterLink to="/ListTodo" class="f18-400">لیست تودو ها</RouterLink>
      </nav>
      <div class="d-flex flex-column w-100 g18 justify-content-center align-items-center pt-5">
        <h2 class="f32-400">
          برای اضافه کردن تودو ها از منو استفاده کنید 
        </h2>
        <h3 class="f32-400">
          با تشکر
        </h3>
      </div>
  </div>
  <RouterView />
</template>

<style scoped>
  .align-text{
    direction: rtl !important;
  }
</style>
