export abstract class CustomError {
    abstract codigo: number;

    abstract serializeErrors(): any;
}