<template>
    <div class="container col-md-6 col-sm-12 d-flex flex-column g18">
        <h2 class="f18-400">
            {{ route.params.detail }}
        </h2>
        <div class="d-flex flex-column g16">
            <input type="text" class="form-control" v-model="editTitle" placeholder="edit Title">
            <input type="text" class="form-control" v-model="editDescription" placeholder="edit Description">
            <button class="btn btn-Show-Item" @click="uopdateTodo">edit Todo</button>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    import { useTodoList } from '@/stores/Todo';

    const route = useRoute()
    const detailTodo = useTodoList()

    let editTitle = ''
    let editDescription = ''

    const singleItem = ref<string>({})
    singleItem.value = detailTodo.singleTodo(route.params.derail as any)
    
    const editItem = () => {
        detailTodo
    }

    const uopdateTodo = () => {
        console.log(editTitle)
        console.log(editDescription)
    }
</script>


<style scoped>
    button.btn.btn-Show-Item {
    background: #252c3f;
    border: 1px solid #2e4d7b;
    color: #fff !important;
}
input{
  background: #252c3f;
  border: 1px solid #2e4d7b;
  text-align: center;
  color: #fff;
}
</style>
