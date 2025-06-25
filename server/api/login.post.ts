
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import validator from 'validator';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

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
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      }
    })
    const isValid = await bcrypt.compare(body.password, user.password)
    console.log("ISVALID: ");

    console.log(isValid);
    if (!isValid) {
      throw createError({
        statusCode: 400,
        message: "Email or password is wrrong"
      })
    }
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

