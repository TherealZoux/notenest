import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const id = getRouterParam(event, 'id')

    const cookies = parseCookies(event)
    const token = cookies.nestnoteJWT

    if (!token) {
      throw createError({
        statusCode: 401,
        message: "Not authorized to update note"
      })
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    const noteTryingToUpdate = await prisma.note.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!noteTryingToUpdate) {

      throw createError({
        statusCode: 401,
        message: "Note does not exist"
      })
    }

    if (noteTryingToUpdate.userId !== decodedToken.id) {

      throw createError({
        statusCode: 401,
        message: "Does not have permission to update this note"
      })
    }

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
