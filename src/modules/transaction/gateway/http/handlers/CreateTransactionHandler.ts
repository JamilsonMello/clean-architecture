import { OutputData } from "../../../core/UseCases/ITransactionUseCase";
import { TransactionService } from "../../../core/services/TransactionService";
import { Transaction } from "../../../core/Entities/Transaction";
import { IExpressAdapter } from '../Adapters/express'

export async function createTransactionHandler({ body }: IExpressAdapter): Promise<OutputData> {
    const service = new TransactionService(new Transaction());

    const result = await service.execute(body);

    return result;
}
