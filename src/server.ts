import express, {Express, Request, Response} from "express"

const app = express()
const PORT = 3000

// middleware 
//app.get("/:id", (req: Request, res: Response) => {
app.get("/", (req: Request, res: Response) => {
    const {params, query, body} = req

    res.status(300).send({a:1})
})

app.get("/persona")

app.listen(PORT, ()=> {
    console.log("pORT: 3000")
})
