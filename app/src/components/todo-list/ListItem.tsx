'use client'

import { FC, useState } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import { ListItem as ChakraListItem, ListIcon } from '@chakra-ui/react'
import { Todo } from '@prisma/client'

import { updateTodo } from './lib/actions'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed)
  const icon = completed ? MdCheckCircle : MdPanoramaFishEye
  async function toggleTodoCompletion(todo: Todo) {
    try {
      if (
        completed &&
        !window.confirm(
          'This will mark the TODO item as non-completed. Are you sure?',
        )
      ) {
        return
      }

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
