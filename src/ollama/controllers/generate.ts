import { EJsendStatus } from "../../app/models/enumerations/jsendStatus"
import { ollamaGenerateService } from "../services/generate"

export const ollamaGenerateController = reqCatch(async(req,res,next) =>  {
    const { prompt } = req.body

    // LLAMARA  LA LOGICA
    await ollamaGenerateService(prompt)

    res.send({
        status: EJsendStatus.SUCCESS,
        data: null
    })
})