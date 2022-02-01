import { InputData } from "../../../core/UseCases/ITransactionUseCase";

export type Errors = {
    message: string;
    value: string;
}

export type IsValid = {
    valid: boolean;
    errors: Array<Errors>;
    data: InputData;
}
