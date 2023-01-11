import { seed } from "./db.js"

async function main() {
  setInterval(async () => await seed(), 5000)
}
await main()
