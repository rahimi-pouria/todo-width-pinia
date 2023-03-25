<template>
    <div v-for="(item , index) in todo.listTodo" :key="index" 
    class="d-flex flex-column">
        <div class="d-flex show-todo p-4 r-12 shadow">
            <router-link :to="`/Todo/${index}`" 
            class="f14-400">
                    {{ item.name }}
            </router-link>
            <span class="f24-400 delete-item"
                @click="todo.removeTodo(index)">&times;</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    // import stores
    import { useTodoList } from '@/stores/Todo';

    // create variable
    const todo = useTodoList()
</script>


<style scoped>
    .show-todo{
        background-color: #42396e;
        justify-content: space-between;
    }
    .delete-item{
        cursor: pointer;
    }
    .delete-item:hover{
        color: red;
    }
a.d-flex.show-todo.p-4.r-12.shadow {
  color: #ffffff !important;
}
 .btn-Edit{
    background-color: #42396e;
    color: #ffffff;
    border: 1px solid #42396e;
 }
 .showName{
    display: none !important;
 }
</style>