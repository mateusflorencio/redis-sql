import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  setInterval(async () => {
    const track = await prisma.track.findMany({
      where: { lido: false },
      include: { Pedido: true },
    })
    if (track.length > 0) {
      for await (const t of track) {
        await prisma.track.update({
          where: { id: t.id },
          data: { lido: true },
        })
      }
    }
    console.log("----------------------------------------------------------")
    console.log("Track: ", track)
    console.log("Tamanho: ", track.length)
  }, 20000)
}

main()
