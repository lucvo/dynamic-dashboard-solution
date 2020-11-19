
export class ApiResponse<T> {
  status: string;
  actionDate: Date;
  data: T;
  requestToken: string;
}
