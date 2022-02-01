export type InputData = {
    value: number;
    bank: string;
    time: Date;
}

export type OutputData = {
    id: number;
    value: number;
    bank: string;
    time: Date;
    created_at: Date;
    updated_at: Date;
}

export interface ITransactionUseCase {
    execute(transaction: InputData): Promise<OutputData>;
}
