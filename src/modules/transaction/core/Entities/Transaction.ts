import { ITransaction } from "../../implementations/Entities/ITransaction";
import { Errors, IsValid } from "../../types/Entities/transaction";
import { InputData } from "../UseCases/ITransactionUseCase";

class Transaction implements ITransaction {
    private _errors: Errors[];

    constructor() {
        this._errors = [];
    }

    public async isValid(input: InputData): Promise<IsValid> {
        return new Promise<IsValid>((resolve) => {
            if (input.value < 10 || !input.value) {
                this._errors.push({
                    message: "The value is not valid",
                    value: input?.value?.toString(),
                })
            }
    
            if (new Date(input.time).getHours() >= 18 || !input.time) {
                this._errors.push({
                    message: "The time is not valid",
                    value: input?.time?.toString(),
                })
            }

            if (typeof input.bank != 'string' || !input.bank) {
                this._errors.push({
                    message: "The bank is not valid",
                    value: input?.bank
                })
            }
    
            return resolve({
                valid: this._errors.length === 0,
                errors: this._errors,
                data: input
            });
        })

    }
}

export { Transaction };
