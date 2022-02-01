import { InputData, ITransactionUseCase, OutputData } from "../UseCases/ITransactionUseCase";
import { ITransaction } from "../../implementations/Entities/ITransaction";

class TransactionService implements ITransactionUseCase {
    constructor(
        private transactionEntity: ITransaction,
    ) {}

    public async execute(transaction: InputData): Promise<OutputData> {
        const { valid, errors, data } = await this.transactionEntity.isValid(transaction);

        if (!valid) {
            console.error(errors)
            throw new Error('Transaction is not valid')
        }

        return { 
            id: 1, 
            ...data,
            created_at: new Date(), 
            updated_at: new Date(), 
        }
    }
}

export { TransactionService };
