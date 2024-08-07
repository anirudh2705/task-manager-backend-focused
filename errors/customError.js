class CustomError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomErr = (msg, statusCode) => {
    return new CustomError(msg, statusCode)
}

module.exports = {
    createCustomErr,
    CustomError
}