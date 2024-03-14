'use client'

import { FC, useState } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import { ListItem as ChakraListItem, Flex, ListIcon } from '@chakra-ui/react'
import { Todo } from '@prisma/client'
import { FaArrowRight } from 'react-icons/fa'

import { updateTodo } from './lib/actions'

type Props = {
  todo: Todo
}

const handleClick = (todo: Todo) => {
  window.location.href = `/todo/${todo.id}`
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
      <Flex
        align='center'
        ml={2}
        cursor='pointer'
        _hover={{ color: 'blue.500' }}
      >
        <ListIcon
          as={icon}
          color='green.500'
          onClick={() => toggleTodoCompletion(todo)}
        />
        {todo.text}
        <FaArrowRight onClick={() => handleClick(todo)}></FaArrowRight>
      </Flex>
    </ChakraListItem>
  )
}

export default ListItem
