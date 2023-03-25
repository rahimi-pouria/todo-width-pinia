<template>
    <div class="container col-md-6 col-sm-12 d-flex flex-column g18">
        <h2 class="f18-400 g16 d-flex justify-content-end">
            {{ route.params.detail }}
            <span class="f16-400">: جزییات شماره</span>
        </h2>
        <div class="d-flex flex-column g16">
            <input type="text" class="form-control" v-model="singleItem.name">
            <input type="text" class="form-control" v-model="singleItem.description">
            <button class="btn btn-Show-Item" @click="uopdateTodo">edit Todo</button>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    import { useTodoList } from '@/stores/Todo';
import router from '@/router';

    const route = useRoute()
    const detailTodo = useTodoList()

    const singleItem = ref([])
    singleItem.value = detailTodo.singleTodo(route.params.detail as any)
    console.log(singleItem.value)

    const uopdateTodo = () => {
        detailTodo.updateTodo(singleItem.value, route.params.detail as any)
        router.push('/ListTodo')
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
