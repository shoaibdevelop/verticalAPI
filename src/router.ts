import { Router } from 'express';
import { searchRouter } from './api/search/search.routes';

const apiRouter = Router();
apiRouter.use('/search', searchRouter);
export { apiRouter };
