import { Fraction2 } from './fraction.model';
import { FractionAnswerKey } from '../answerKey.model';
import { OperationType } from 'src/app/enums/operationType.enum';
export interface MultipleFractionProblem{
    question: string;
    firstFraction: Fraction2;
    secondFraction: Fraction2;
    answer: Fraction2;
    answerChoices: FractionAnswerKey;
    operationType?: OperationType;
}
