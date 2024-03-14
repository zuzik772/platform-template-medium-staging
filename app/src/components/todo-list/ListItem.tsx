'use client'

import { FC, useEffect, useState } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import {
  ListItem as ChakraListItem,
  Checkbox,
  ListIcon,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Todo } from '@prisma/client'
import axios from 'axios'
import { set } from 'lodash'
import { use } from 'chai'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed)
  const icon = todo.completed ? MdCheckCircle : MdPanoramaFishEye
  console.log('here', todo)

  // async function updateTodo(todo: Todo) {
  //   const updated = {
  //     ...todo,
  //     completed: !todo.completed,
  //   }
  //   setCompleted((prevState) => !prevState)
  //   console.log('updated', updated)
  // }

  async function updateTodo(todoId: number) {
    console.log('todoid ', todoId)
    try {
      const response = await axios.put(`/api/todos/${todoId}`, {
        completed: !completed,
      })
      setCompleted(response.data.completed)
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  return (
    <ChakraListItem>
      <ListIcon
        as={icon}
        color='green.500'
        onClick={() => {
          updateTodo(todo.id)
        }}
      />

      {/* <Link href={`/todo/${todo.id}`}>{todo.text}</Link> */}
      {/* <Checkbox defaultChecked>Checkbox</Checkbox> */}
      {todo.text}
    </ChakraListItem>
  )
}

export default ListItem
