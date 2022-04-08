import { ErrorCodes } from "../util/errorCode";
import HttpException from "./HttpException";

class IncorrectUsernameOrPasswordException extends HttpException{
    constructor() {
        const errorDetail = ErrorCodes.INCORRECT_USERNAME_OR_PASSWORD;
        super(401, errorDetail.MESSAGE, errorDetail.CODE)
    }
}

export default IncorrectUsernameOrPasswordException;