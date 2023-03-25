import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoList = defineStore('Todo', () => {
  // create variable 
    let getValue = ''

  // create array of object
  const listTodo = ref<string[{}]>([])


  // functions

  // add and description todo functio

  function addTodo(item: string, desc: string) {
    listTodo.value.push(
      {id: 5 , name: item, icon: './assets/svg/trash.png' , description: desc}
      )
      getValue = ''
  }

  // edit todo function

  function editTodoName(item: string, desc: string) {
    listTodo.value.push(
      {id: 5 , name: item, icon: './assets/svg/trash.png' , description: desc}
    )
  }
  // remove todo function

  function removeTodo(index: number) {
    listTodo.value.splice(index, 1)
  }

  // Get Single Item
  const singleTodo = (payload: number) => {
    return listTodo.value.find((item: string, index: number) => { return index == payload })
  }

// update

const updateTodo = (newData: string, itemIndex: number) => {
  const findedIndex = listTodo.value.findIndex((item: ITodoItem, index) => { return index == itemIndex })
  listTodo.value[findedIndex] = newData
}

// return function and array .....

  return {
           listTodo,
            addTodo,
            removeTodo,
            getValue,
            editTodoName,
            singleTodo,
            updateTodo
          }
})
