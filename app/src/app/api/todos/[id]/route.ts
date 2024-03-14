import { updateTodo } from '@/components/todo-list/lib/actions'
import { Todo } from '@prisma/client'

export async function PUT({ id, data }: { id: number; data: Todo }) {
  const updated = await updateTodo(id, data)
  console.log('updated', updated)
  return Response.json(updated)
}
