'use server'

import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type TodoCreateBody = Prisma.Args<typeof prisma.todo, 'create'>['data']
export type TodoUpdateBody = Prisma.Args<typeof prisma.todo, 'update'>['data']

export async function createTodo(
  prevState: string | undefined,
  data: TodoCreateBody,
) {
  const newTodo = await prisma.todo.create({ data })

  revalidatePath('/')
  redirect(`/todo/${newTodo.id}`)
}

export async function updateTodo(id: number, data: TodoUpdateBody) {
  console.log('hello from update todo', id, data)
  try {
    // Fetch the existing todo by ID
    const existingTodo = await prisma.todo.findUnique({ where: { id } })

    if (!existingTodo) {
      console.error(`Todo with ID ${id} not found.`)
      return
    }

    // Update the todo with new data
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data,
    })

    console.log(`Todo with ID ${id} updated successfully:`, updatedTodo)
    return updatedTodo
  } catch (error) {
    console.error('Error updating todo:', error)
  }
}
