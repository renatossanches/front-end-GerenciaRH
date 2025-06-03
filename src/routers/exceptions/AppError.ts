export class AppError extends Error {
    public readonly originalError?: unknown;
  
    constructor(message: string, originalError?: unknown) {
      super(message);
      this.name = 'AppError';
      this.originalError = originalError;
  
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  