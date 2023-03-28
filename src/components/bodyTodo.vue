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
        <!-- form validation add todo   -->
        <div class="d-flex w-100 search-todo g16">
            <form @submit.prevent="addItemTodo" class="w-100 d-flex">
                <div class="form-group">
                    <input type="text" class="form-control w-100"
                    placeholder="add todo"
                    v-model="itemTodo"
                    >
                </div>
                <div class="form-group">
                    <input type="text" class="form-control w-100"
                    placeholder="add description todo"
                    v-model="descTodo"
                    >
                </div>
            <!-- btn form validation -->
            <button class="btn-add-todo w-30">
             add todo
            </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
// import ref and reactive 
    import { ref } from 'vue'
// import components
    import showTodo from './showTodo.vue';
    // import stores
    import { useTodoList } from '@/stores/Todo';
    const addTodo = useTodoList()
    let itemTodo = ref('')
    let descTodo = ref('')
    // function add item

    const addItemTodo = () => {
        if(itemTodo.value === '' && descTodo.value === '') {
            alert('پر کردن فیلدها الزامی می باشد')
        }else {
            addTodo.addTodo(itemTodo.value,  descTodo.value)
            itemTodo.value = ''
            descTodo.value = ''
        }
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
    .show-alert {
        display: none !important;
    }
</style>