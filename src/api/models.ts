import { Request, Response } from 'express';

export interface IApiResponse<T = any> {
  statusCode: number;
  message: string | null;
  data?: T;
  errors?: Record<any, any>
}

export type ControllerResponse<T> = Response<IApiResponse<T>, Record<any, any>>;
export type ControllerFunction<T = any> = (
  req: Request,
  res: Response<IApiResponse<T>>
) => Promise<ControllerResponse<T>> | ControllerResponse<T>;

export enum ApiMessageEnum {
  OK = 'OK',
  NOT_FOUND = 'NOT_FOUND',
  ERROR = 'ERROR',
  BAD_REQUEST = 'BAD_REQUEST',
  MALFORMED_REQUEST = 'MALFORMED_REQUEST',
}
