import { NextApiRequest, NextApiResponse } from 'next'
import { updateTodo } from '@/components/todo-list/lib/actions'
import { Todo } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'PUT') {
    const { id, data } = req.body
    const updated = await updateTodo(id, data)
    console.log('updated', updated)
    res.json(updated)
  } else {
    res.status(405).send('Method Not Allowed')
  }
}
