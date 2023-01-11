-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "numeroPedido" TEXT NOT NULL,
    "codBarrasEtiq" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "totalVolume" TEXT NOT NULL,
    "codigoTransportadora" TEXT NOT NULL,
    "dataDoPedidoPrevisto" TIMESTAMP(3) NOT NULL,
    "tipoDePedido" TEXT NOT NULL,
    "rota" TEXT NOT NULL,
    "conferencia" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "lido" BOOLEAN NOT NULL DEFAULT false,
    "id_pedido" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
