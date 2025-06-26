// /api/notes
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
        message: "Not authorized to access notes"
      })
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    const notes = await prisma.note.findMany({
      where: {
        userId: decodedToken.id
      }
    })

    return notes
  } catch (err) {
    console.log(err);


  }
})
