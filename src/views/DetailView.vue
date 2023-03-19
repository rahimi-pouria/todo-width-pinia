<template>
    <div class="d-flex flex-column g18">
        <h2 class="f18-400">
            this is detail page
        </h2>
        <h3>{{ detailTodo.itemTodo(route.params.detail as string) }}</h3>
    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { useTodoList } from '@/stores/Todo';

    const route = useRoute()
    const detailTodo = useTodoList()
</script>
<style></style>
