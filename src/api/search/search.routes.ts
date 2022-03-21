import { Router } from 'express';
import {
  getAllSearchRecords,
  addSearchItems,
  getSearchResults,
  getSearchDetailById
} from './search.controller';

const router = Router();
router.get('/all', getAllSearchRecords);
router.get('/', getSearchResults);
router.get('/:id', getSearchDetailById);
router.post('/', addSearchItems);
export const searchRouter = router;
