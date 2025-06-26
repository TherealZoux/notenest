
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const id = getRouterParam(event, 'id')
    await prisma.note.update({
      where: {
        id: Number(id),
      },
      data: { text: body.text }
    })

  } catch (error) {

    console.log(error);
  }
})
