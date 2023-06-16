export interface Response<T> {
  data?: {
    data?: T;
    error?: ErrorResponse;
  };
}

export interface ResponseData<T> {
  data?: {
    data: T;
  };
  error?: ErrorResponse;
}

export interface ErrorResponse {
  code?: number;
  message?: string;
}
