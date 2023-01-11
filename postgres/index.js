import { seed } from "./db.js"
import { setTimeout } from "node:timers/promises"

async function main() {
  do {
    const time = Math.floor(Math.random() * 10000) + 1000
    await seed()
    await setTimeout(time, () => { })
  } while (true)

}
await main()
