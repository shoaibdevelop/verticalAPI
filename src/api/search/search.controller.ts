import { ApiMessageEnum, ControllerFunction } from '../models';
import { Search } from './search.entity';

export const getAllSearchRecords: ControllerFunction<Search[] | Search | null> =
  async (req, res) => {
    let found: Search[] | Search = [];

      found = await Search.getSearchResults('')
    return res
      .status(200)
      .json({ message: ApiMessageEnum.OK, statusCode: 200, data: found });
  };

export const addSearchItems: ControllerFunction<Search> = async (req, res) => {
  const { body } = req;
  const {
    title,
    photo,
    description,
    shortDescription
  } = body;

  try {
    const created = await Search.create({
    title,
    photo,
    description,
    shortDescription
    }).save();

    return res
      .status(200)
      .json({ data: created, message: ApiMessageEnum.OK, statusCode: 200 });
  } catch (e) {
    return res.status(400).json({ statusCode: 400, message: e.message });
  }
};

export const getSearchResults: ControllerFunction<Search[] | Search | null > = async (
  req,
  res
) => {
  try {
    const { search } = req.query;
    const found = await Search.getSearchResults(search.toString());
    return res
      .status(200)
      .json({ message: ApiMessageEnum.OK, statusCode: 200, data: found });
  } catch (e) {
    return res.status(400).json({ message: e.message, statusCode: 400 });
  }
};

export const getSearchDetailById: ControllerFunction<Search[] | Search | null > = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const found = await Search.getSearchDetailById(id);
    return res
      .status(200)
      .json({ message: ApiMessageEnum.OK, statusCode: 200, data: found });
  } catch (e) {
    return res.status(400).json({ message: e.message, statusCode: 400 });
  }
};