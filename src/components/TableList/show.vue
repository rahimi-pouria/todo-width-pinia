<template>
    <div class="d-flex w-100">
        <!-- create table  -->
        <table class="d-flex flex-column w-100 g16 justify-content-end">
            <tr class="d-flex text-right g32 p-4 shadow justify-content-between">
                <th>نام</th>
                <th>توضیحات</th>
            </tr>
            <tr class="d-flex text-right g32 p-4 shadow justify-content-between" v-for="(item, i) in tableTodo.listTodo" :key="i">
                <td>{{ item.name }}</td>
                <td class="">{{ item.description }}</td>
            </tr>
        </table>
    </div>
</template>
<script setup lang="ts">
    // import store
    import { useTodoList } from '@/stores/Todo';
    const tableTodo = useTodoList()
</script>
<style scoped>
    table{
        direction: rtl;
        text-align: right;
    }
    tr:nth-child(even){
       background: #353e5b;
       border-radius: 9px;
    }
    tr:nth-child(odd){
       background: #42396e;
       border-radius: 9px;
    }
</style>
