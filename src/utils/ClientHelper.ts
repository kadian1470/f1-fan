import { egrastUrl, Modify } from "./AppSettings";

export const egrastJsonType = (url: string) => `${egrastUrl}${url}.json`;

export type BasePagedResponse = Readonly<{
  limit: number;
  offset: number;
  total: number;
}>;
export interface ErgastResponse<T> {
  MRData: MRData<T>;
}

export type MRData<T> = Modify<T, BasePagedResponse>;
