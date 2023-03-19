<template>
    <div class="d-flex flex-column d-flex container 
            col-md-6 col-sm-12 justify-content-center
             g16 justify-content-center">
        <div class="d-flex w-100 justify-content-center header-list-todo p-3 shadow">
            <p class="f24-400">
                لیست تودو ها 
            </p>
        </div>     
        <show />
    </div>
</template>
<script setup lang="ts">
    import show from '@/components/TableList/show.vue';
</script>
<style scoped>
    .header-list-todo{
        background: #42396e;
    }
</style>
