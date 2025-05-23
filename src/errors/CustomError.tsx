type CustomErrorOptions = {
  details?: string;
  statusCode?: number;
};

export type ErrorType = {
  message: string;
  options?: CustomErrorOptions;
};

export class CustomError extends Error {
  public options: CustomErrorOptions;
  public statusCode?: number;
  public details?: string;

  constructor(message: string, options: CustomErrorOptions = {}) {
    super(message);
    this.name = "CustomError";

    this.options = options;

    this.statusCode = options.statusCode;
    this.details = options.details;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}