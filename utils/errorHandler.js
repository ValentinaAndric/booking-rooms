class ErrorHandler extends Error {
    constructor(message, statusCode) {

        super(message);
        this.statusCode = statusCode;
        //captureStackTrace help us to find error location in our code
        Error.captureStackTrace(this, this.constructor)
    }
}

export default ErrorHandler;