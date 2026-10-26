import { Router } from "express";

import * as usuarioCtr from "./usuario.controller.js";

const router = Router();//Uso el metodo de Router() de express para crear las rutas
//La ruta tiene dos parametros de la ruta en si misma
// y el metodo que la resuelve

router.get("/usuarios", usuarioCtr.obtenerUsuarios);

export default router;