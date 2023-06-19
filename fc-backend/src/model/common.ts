export interface FOResponse<T> {
  data?: {
    data?: T;
    error?: ErrorResponse;
  };
}

export interface FFResponse<T> {
  data?: T;
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
