import { FC } from 'react'
import { fetchTodos } from './lib/data'
import { List } from '@chakra-ui/react'
import ListItem from './ListItem'

const TodoList: FC = async () => {
  const todos = await fetchTodos()

  return (
    <List spacing={3}>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default TodoList
