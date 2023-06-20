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

export interface MongoChangeStream {
  _id?: {
    _data?: string;
  };
  operationType?: string;
  // clusterTime?: Timestamp { _bsontype?: 'Timestamp', low_?: 12, high_?: 1687245563 },
  fullDocument?: {
    _id?: string;
    name?: string;
    uid?: string;
    created_date?: string;
    __v?: number;
  };
  ns?: { db?: string; coll?: string };
  documentKey?: { _id?: string };
}
