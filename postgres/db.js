import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()
export const seed = async () => {
  const pedido = await prisma.pedido.create({
    data: {
      numeroPedido: faker.random.numeric(5),
      codBarrasEtiq: faker.random.numeric(10),
      volume: faker.random.numeric(),
      totalVolume: faker.random.numeric(),
      codigoTransportadora: faker.helpers.arrayElement(["jadlog", "loggi", "correios", "tnt", "dhl", "fedex", "ups"]),
      dataDoPedidoPrevisto: faker.date.future(),
      tipoDePedido: faker.random.numeric(),
      rota: faker.helpers.arrayElement(["rota1", "rota2", "rota3", "rota4", "rota5", "rota6", "rota7", "rota8", "rota9", "rota10"]),
      conferencia: faker.helpers.arrayElement(["Sim", "Não"]),

    },
  })

  if (pedido)
    await prisma.track.create({
      data: {
        id_pedido: pedido.id,
      },
    })

  console.log("----------------------------------------------------------")
  console.log("Pedido created: ", pedido)
}
