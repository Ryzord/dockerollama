import express, { Router } from 'express';
import { ollamaGenerateRoute } from './generate';

const mount = (appRouter: Router) =>{
    const router = express.Router()

    router.post('/generate', ...ollamaGenerateRoute())

    appRouter.use('/ollama', router)
}

events.subscribe('expressRoutes', appRouter => mount(appRouter as Router))