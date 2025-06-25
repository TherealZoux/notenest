import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(body.password, salt)

    await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        salt: salt
      }
    })

    return { data: "success" }
  } catch (error: any) {
    console.log(error.code)
    if (error.code === 'P2002') {
      throw createError({
        statusCode: 405,
        message: "An email with this address already exists."
      })
    }
    throw error
  }
})

