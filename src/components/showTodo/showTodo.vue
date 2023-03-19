<template>
    <div v-for="(item , index) in todo.listTodo" :key="index" 
    class="d-flex flex-column">
        <div class="d-flex show-todo p-4 r-12 shadow">
            <router-link :to="`/todo/${item}`" 
            v-if="showName"
            class="f14-400">
                    {{ item.name }}
            </router-link>
            <div v-else class="d-flex">
                <input type="text" :placeholder="item.name">
                <button class="btn-Edit" @click="editTodo">
                    تایید
                </button>
            </div>
            <div class="d-flex g8">
                <button class="btn-Edit" @click="showChangeName">
                    ویرایش
                </button>
                <span class="f24-400 delete-item"
                @click="todo.removeTodo(index)">&times;</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    // import stores
    import { useTodoList } from '@/stores/Todo';
    import { ref } from 'vue';
    // create variable
    const todo = useTodoList()
    const edtiItemTodo = ref('')
    let showName = true

    const showChangeName = () => {
        console.log('clicked')
        showName = false
    }
    const editTodo = () => {
        todo.editTodoName(edtiItemTodo.value)
    }
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