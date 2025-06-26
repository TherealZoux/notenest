import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import validator from 'validator';
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(body.password, salt)

    // email validation
    if (!validator.isEmail(body.email)) {
      throw createError({
        statusCode: 400,
        message: "Invalid email address."
      })
    }

    // password validation
    if (!validator.isStrongPassword(body.password, { minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 })) {
      throw createError({
        statusCode: 400,
        message: "Password must be at least 8 characters long."
      })
    }

    // prisma client query
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        salt: salt
      }
    })

    // jwt init
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    setCookie(event, "nestnoteJWT", token)

    return { data: "success" }
  } catch (error: any) {
    // error for emait availability checks
    if (error.code === 'P2002') {
      throw createError({
        statusCode: 405,
        message: "An email with this address already exists."
      })
    }
    throw error
  }
})

