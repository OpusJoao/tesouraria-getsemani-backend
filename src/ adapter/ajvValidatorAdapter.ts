import IValidator from "../interface/IValidator";
import Ajv from 'ajv'

type AjvValidator = {
    instancePath: String,
    schemaPath: String,
    keyword: String,
    params: {
      missingProperty: String
    },
    message: String
}

export default class AjvValidatorAdapter implements IValidator{
    private validate: any
    private ajvValidator = new Ajv()
    constructor(schema: Object){
        this.validate = this.ajvValidator.compile(schema)
    }
    validateData(data: Object) {
        const isValid = this.validate(data)
        return {
            valid: isValid,
            error: !isValid ? this.returnErrorFormated(this.validate.errors[0]): '',
        }
    }
    returnErrorFormated(error: AjvValidator): String{
        return `${error?.instancePath ? " " : ""}${error?.message}`
    }
}

