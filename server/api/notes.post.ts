
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {

    const cookies = parseCookies(event)
    const token = cookies.nestnoteJWT

    if (!token) {
      throw createError({
        statusCode: 401,
        message: "Not authorized to update note"
      })
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    const newNote = await prisma.note.create({
      data: {
        text: 'New note',
        userId: decodedToken.id
      }
    })
    return newNote
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Could not verify  jwt"
    })

  }
})
