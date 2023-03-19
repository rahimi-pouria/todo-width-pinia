<template>
    <div class="d-flex flex-column g16 r-12">
        <input type="text" class="form-control" placeholder="search todo">
        <!-- component show todo -->
        <div class="d-flex flex-column g6">
            <showTodo />
        </div>
        <!-- search and envent add todo  -->
        <div class="d-flex w-100 search-todo">
            <input type="text" class="form-control w-65"
             placeholder="add todo"
             v-model="itemTodo"
             >
            <!-- btn evebt add todo -->
            <button class="btn-add-todo w-30"
             @click="addItemTodo">add todo</button>
        </div>
    </div>
</template>

<script setup lang="ts">
// import ref and reactive 
    import { ref } from 'vue'
// import components
    import showTodo from './showTodo/showTodo.vue'
    // import stores
    import { useTodoList } from '@/stores/Todo';
import router from '@/router';
    const addTodo = useTodoList()
    const itemTodo = ref('')

    // function add item

    const addItemTodo = () => {
        console.log('add')
        addTodo.addTodo(itemTodo.value)
    }
</script>

<style scoped>
    input{
        background: #252c3f;
        border: 1px solid #2e4d7b;
        text-align: center;
        color: #fff;
    }
    input:focus{
        background: #252c3f;
        border: 1px solid #2e4d7b;
        color: #fff !important;
    }
    .btn-add-todo{
        background: #252c3f;
        border: 1px solid #2e4d7b;
        color: #fff !important;
    }
    .search-todo{
        justify-content: space-between;
        padding-top: 15px;
    }
</style>