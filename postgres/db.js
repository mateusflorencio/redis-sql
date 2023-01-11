import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

export const seed = async () => {
  const user = await prisma.user.create({
    data: {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  })

  if (user)
    await prisma.track.create({
      data: {
        id_user: user.id,
      },
    })

  console.log("User created: ", user)
}
