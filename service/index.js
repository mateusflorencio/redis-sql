import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  setInterval(async () => {
    const track = await prisma.track.findMany({
      where: { lido: false },
      include: { User: true },
    })
    if (track.length > 0) {
      for await (const t of track) {
        await prisma.track.update({
          where: { id: t.id },
          data: { lido: true },
        })
      }
    }

    console.log("Track: ", track)
  }, 20000)
}

main()
