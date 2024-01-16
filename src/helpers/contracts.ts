export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type HTTPRequest = {
  method: HTTPMethod;
  body: Record<string, any>;
  queryParams: Record<string, any>;
  headers: Record<string, any>;
};

export type HTTPBodyData = {
  message?: string;
  data?: Record<string, any>;
};

export type HTTPHeadersData = {
  [key: string]: string;
};

export type HTTPResponse = {
  setStatus: (status: number) => void;
  setBody: (params: HTTPBodyData) => void;
  setHeaders: (params: HTTPHeadersData) => void;
};

export interface IHTTPRoutes {
  execute: (request: HTTPRequest, response: HTTPResponse) => void;
}
