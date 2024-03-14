'use client'

import { FC, useEffect, useState } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import { ListItem as ChakraListItem, ListIcon } from '@chakra-ui/react'
import Link from 'next/link'
import { Todo } from '@prisma/client'

import { updateTodo } from './lib/actions'
import { use } from 'chai'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed)
  const icon = completed ? MdCheckCircle : MdPanoramaFishEye
  async function toggleTodoCompletion(todo: Todo) {
    try {
      const updated = await updateTodo(todo.id, {
        ...todo,
        completed: !completed,
      })
      console.log('Updated todo:', updated)
      setCompleted(!completed) // Update the state after successful update
    } catch (error) {
      console.error('Error updating todo:', error)
      setCompleted(!completed) // Revert the state in case of error
    }
  }

  return (
    <ChakraListItem>
      <ListIcon
        as={icon}
        color='green.500'
        onClick={() => toggleTodoCompletion(todo)}
      />

      {todo.text}
    </ChakraListItem>
  )
}

export default ListItem
