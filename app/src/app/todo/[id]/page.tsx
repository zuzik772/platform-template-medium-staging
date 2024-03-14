import { Box, Heading, Text } from '@chakra-ui/react'
import { fetchTodo } from '../../../components/todo-list/lib/data'
import { Metadata } from 'next'
import { FC } from 'react'
import BackLink from '@/components/common/BackLink'

export const metadata: Metadata = {
  title: 'Todo',
}

type Params = {
  params: {
    id: string
  }
}

const TodoPage: FC<Params> = async ({ params }) => {
  const todo = await fetchTodo(parseInt(params.id, 10))
  const todoStatus = todo?.completed
  console.log(todoStatus)

  if (!todo) {
    return <div>Todo not found</div>
  }

  return (
    <Box padding='5' bg='gray.100' borderRadius='md'>
      <BackLink />
      <Heading as='h1' size='lg' mb={4} color='teal.500'>
        {todo.text}
      </Heading>
      <Text mb={10} fontSize='lg' color='gray.600'>
        {todo.description}
      </Text>
      <Text mb={2} color={todo.completed ? 'green.500' : 'red.500'}>
        {`Status: ${todo.completed ? 'Completed' : 'Not Completed'}`}
      </Text>
      <Text mb={2}>{`Type: ${todo.type}`}</Text>
      <Text
        mb={2}
        color='gray.500'
      >{`Created At: ${todo.createdAt.toLocaleString()}`}</Text>
    </Box>
  )
}

export default TodoPage
