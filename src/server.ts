import * as express from "express"
import { calculate } from "./policy"

const app = express()

app.get("/", (req, res) => res.send("Hello, World!" + JSON.stringify(req.headers)))
app.get("/:name", (req, res) => res.send(`Hello, ${calculate(req.params.name)}`))

const port = parseInt(process.env.PORT || "", 10) || 3200
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}/`))
