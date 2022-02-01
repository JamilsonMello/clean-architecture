import { InputData } from "../../core/UseCases/ITransactionUseCase";
import { IsValid } from "../../types/Entities/transaction";

export interface ITransaction {
    isValid(input: InputData): Promise<IsValid>;
}
