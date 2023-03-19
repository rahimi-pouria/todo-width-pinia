import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoList = defineStore('Todo', () => {
  // create variable 
    let getValue = ''
  // create array of object
  const listTodo = ref<string[{}]>([
    {
      id: 1,
      name: 'Do yoya',
      icon: '@/assets/svg/trash.png',
      description: 'lorem ipsum i am programming'
    },
    {
      id: 2,
      name: '50 pushups',
      icon: './assets/svg/trash.png',
      description: 'lorem ipsum i am programming'
    },
    {
      id: 3,
      name: 'order pizza',
      icon: './assets/svg/trash.png',
      description: 'lorem ipsum i am programming'
    }
  ])

  // functions

  // add todo functio

  function addTodo(item: string) {
    listTodo.value.push(
        {id: 5 , 
          name: item, 
          icon: './assets/svg/trash.png',
         description: 'lorem ipsum i am programming'}
      )
      getValue = ''
  }

  // edit todo function
  function editTodoName(item: string) {
    listTodo.value.push(
      {id: 5 , name: item, icon: './assets/svg/trash.png'}
    )
  }

  // remove todo function

  function removeTodo(index: number) {
    listTodo.value.splice(index, 1)
  }

    // Get Single Item
    const itemTodo = (item: string) => {
      return listTodo.value.find(x => { return x == item })
    }

// return function and array .....

  return {listTodo, addTodo, removeTodo, getValue, editTodoName, itemTodo}
})
