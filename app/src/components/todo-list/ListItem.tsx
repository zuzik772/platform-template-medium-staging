'use client'

import { FC, useEffect, useState } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import { ListItem as ChakraListItem, ListIcon } from '@chakra-ui/react'
import Link from 'next/link'
import { Todo } from '@prisma/client'

import { updateTodo } from './lib/actions'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed)
  const icon = todo.completed ? MdCheckCircle : MdPanoramaFishEye

  async function toggleTodoCompletion(todo: Todo) {
    try {
      const updated = await updateTodo(todo.id, {
        ...todo,
        completed: !todo.completed,
      })
      console.log('Updated todo:', updated)
    } catch (error) {
      console.error('Error updating todo:', error)
      setCompleted(todo.completed)
    }
  }

  return (
    <ChakraListItem>
      <ListIcon
        as={icon}
        color='green.500'
        onClick={() => toggleTodoCompletion(todo)}
      />

      {/* <Link href={`/todo/${todo.id}`}>{todo.text}</Link> */}
      {/* <Checkbox
        defaultChecked
        checked={todo.completed}
        onChange={(e) => {
          updateTodo({ ...todo, completed: e.target.checked })
        }}
      ></Checkbox> */}
      {todo.text}
    </ChakraListItem>
  )
}

export default ListItem
