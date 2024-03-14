'use client'
import { FC } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import { ListItem as ChakraListItem, ListIcon, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { Todo } from '@prisma/client'
import { FaArrowRight } from 'react-icons/fa'

type Props = {
  todo: Todo
}

const handleClick = (todo: Todo) => {
  window.location.href = `/todo/${todo.id}`
}

const ListItem: FC<Props> = ({ todo }) => {
  const icon = todo.completed ? MdCheckCircle : MdPanoramaFishEye
  return (
    <ChakraListItem>
      <Flex
        align='center'
        ml={2}
        cursor='pointer'
        _hover={{ color: 'blue.500' }}
      >
        <ListIcon as={icon} color='green.500' fontSize='1.5rem' />
        {todo.text}
        <FaArrowRight onClick={() => handleClick(todo)}></FaArrowRight>
      </Flex>
    </ChakraListItem>
  )
}

export default ListItem
