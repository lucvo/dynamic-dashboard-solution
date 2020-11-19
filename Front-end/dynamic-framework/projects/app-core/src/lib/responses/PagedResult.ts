
export class PagedResult<T> {
  records: T[];
  totalItems: number;
  pageSize: number;
  totalPage: number;
  requestToken: string;
}
