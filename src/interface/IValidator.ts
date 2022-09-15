export default interface IValidator{
    validateData(data: Object) : { valid: boolean, error: String}
}