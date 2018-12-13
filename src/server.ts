import { Request, Response } from "express"

import * as express from "express"
import { calculate } from "./policy"
const app: express.Application = express()
const port: number = parseInt(process.env.PORT) || 3000

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello, World!")
})

app.get("/:name", (req: Request, res: Response) => {
    const { name } = req.params
    res.send(`Hello, ${calculate(name)}`)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})
