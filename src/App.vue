<script setup lang="ts">
  import Todo from './views/Todo.vue';
</script>

<template>
  <div class="d-flex w-100 justify-content-end pr-3">
      <nav class="d-flex g16 text-right">
        <RouterLink to="/Todo" class="f18-400">اضافه کردن تودو</RouterLink>
        <RouterLink to="/ListTodo" class="f18-400">لیست تودو ها</RouterLink>
      </nav>
  </div>
  <RouterView />
</template>

<style scoped>
</style>
