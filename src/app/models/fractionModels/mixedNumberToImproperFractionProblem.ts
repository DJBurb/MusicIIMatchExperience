import { OperationType } from "src/app/enums/operationType.enum";
import { FractionAnswerKey } from "../answerKey.model";
import { Fraction2 } from "./fraction.model";

export interface MixedNumberImproperFractionProblem {
    question: string;
    wholeNumber: number | null;
    numerator: number | null;
    denominator: number | null;
    improperNumerator: number | null;
    answerChoices: FractionAnswerKey;
    operationType?: OperationType;
}
