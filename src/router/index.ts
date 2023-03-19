import { createRouter, createWebHistory } from 'vue-router'
// import page
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Todo',
      name: 'Todo',
      component: () => import('../views/Todo.vue')
    },
    {
      path: '/ListTodo',
      name: 'list-todo',
      component: () => import('../views/ListTodo.vue')
    },
    {
      path: '/todo/:detail',
      name: 'detail-page',
      component: () => import('../views/DetailView.vue')
    }
  ]
})

export default router
