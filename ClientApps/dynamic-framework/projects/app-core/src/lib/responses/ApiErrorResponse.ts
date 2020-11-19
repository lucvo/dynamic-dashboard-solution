import { ErrorDetail } from './ErrorDetail';

export class ApiErrorResponse {
  statusCode: number;
  errorDetails: ErrorDetail[];
}
