import { Bee } from '@ethersphere/bee-js'

export async function sillyFunction() {
  const bee = new Bee('http://localhost:1633')
  const writer = bee.makeSOCWriter(new TextEncoder().encode('6d2b74a9d0ce052b5c231fc80e8e1ab3'))
  // todo actual batch id should be changed
  const batchId = '6d2b74a9d0ce052b5c231fc80e8e1ab31479ef800824cd732153d91bd9b309b1'
  const id = new TextEncoder().encode('6d2b74a9d0ce052b5c231fc80e8e1ab3')
  const data = new TextEncoder().encode('hello')
  // @ts-ignore
  await writer.upload(batchId, id, data)
  return 4
}
