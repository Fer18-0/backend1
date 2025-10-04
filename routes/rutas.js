import { Router } from "express"

const router = Router()

// Ejemplo de datos
var artistas = ["van gogh", "beethoven", "mozart", "da vinci"]

// Página principal
router.get("/", (req, res) => {
  res.render("home", { artistas })
})

// Página info
router.get("/info/:c/:texto", (req, res) => {
  var c = req.params.c
  var texto = req.params.texto
  console.log(c)
  res.render("info", { c, texto })
})


router.get("/contacto", (req, res) => {
  res.render("contact")
})


router.post("/enviar-contacto", (req, res) => {
  const { nombre, edad } = req.body
  res.send(`Gracias ${nombre}, hemos recibido tu información. Tu edad es ${edad}.`)
})

export default router
