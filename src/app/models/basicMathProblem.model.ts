import { OperationType } from '../enums/operationType.enum';
export interface BasicMathProblem{
    question: string;
    firstNumber: number;
    secondNumber: number;
    answer: number;
    letterAnswer: string;
    operationType?: OperationType;
    answerChoices: number[]|string[]
}

