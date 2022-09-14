import { Fraction2 } from './fraction.model';
import { FractionAnswerKey } from '../answerKey.model';
export interface MultipleFractionProblem{
    question: string;
    firstFraction: Fraction2;
    secondFraction: Fraction2;
    answer: Fraction2
    answerChoices: FractionAnswerKey
}