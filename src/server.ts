import * as express from "express"
import { calculate } from "./policy"

const app: express.Application = express()
const port: number = parseInt(process.env.PORT, 10) || 3000

app.get("/", (_req: express.Request, res: express.Response) => {
    res.send("Hello, World!")
})

app.get("/:name", (req: express.Request, res: express.Response) => {
    const { name } = req.params
    res.send(`Hello, ${calculate(name)}`)
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening at http://localhost:${port}/`)
})
