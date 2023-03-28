import { ref } from 'vue'
import { defineStore } from 'pinia'

// interface type todo list 
export interface todoList {
  name: string,
  icon: string,
  description: string
}

export const useTodoList = defineStore('Todo', () => {

  // create array of object
  const listTodo = ref<todoList[]>([] as todoList[])


  // functions

  // add description todo function

  function addTodo(item: string, desc: string) {
    listTodo.value.push(
      {name: item, icon: './assets/svg/trash.png' , description: desc}
      )
  }

  // edit todo function
  function editTodoName(item: string, desc: string) {
    listTodo.value.push(
      {name: item, icon: './assets/svg/trash.png' , description: desc}
    )
  }

  // remove todo function

  function removeTodo(index: number) {
    listTodo.value.splice(index, 1)
  }

  // Get Single Item
  const singleTodo = (payload: number) => {
    return listTodo.value.find((item: todoList,  index: number) => { return index == payload })
  }


// update
const updateTodo = (newData: todoList, itemIndex: number) => {
  const findedIndex = listTodo.value.findIndex((index:any) => { return index == itemIndex })
  listTodo.value[findedIndex] = newData
}

// return function and array .....
  return {
           listTodo,
            addTodo,
            removeTodo,
            editTodoName,
            singleTodo,
            updateTodo
          }
})
