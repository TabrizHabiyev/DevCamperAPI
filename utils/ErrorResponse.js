class ErrorResponse extends Error{
    constructor(message,ststusCode){
       super(message);
       this.ststusCode = ststusCode;
    }
}

module.exports = ErrorResponse;