import { ErrorDetail } from './error-detail';

export interface ErrorResponse {
  statusCode: number;
  errorDetails: ErrorDetail[];
}
