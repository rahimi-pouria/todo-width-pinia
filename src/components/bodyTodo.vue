<template>
    <div class="d-flex flex-column g16 r-12">
        <!-- if for show text no data  -->

        <div v-if="addTodo.addTodo.length > 0" class="d-flex">
            <p class="f16-400">
                // no todo
            </p>
        </div>

        <!-- component show todo -->
        <div v-else class="d-flex flex-column g6">
            <showTodo />
        </div>
        <!-- search and envent add todo  -->
        <div class="d-flex w-100 search-todo g16">
            <input type="text" class="form-control w-65"
             placeholder="add todo"
             v-model="itemTodo"
             >
             <input type="text" class="form-control w-65"
             placeholder="add description todo"
             v-model="descTodo"
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
    const addTodo = useTodoList()
    const itemTodo = ref('')
    const descTodo = ref('')
    // function add item

    const addItemTodo = () => {
        addTodo.addTodo(itemTodo.value,  descTodo.value)
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