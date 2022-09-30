import { BasicMathProblem } from "../basicMathProblem.model";
import { MultipleFractionProblem } from "./multipleFractionProblem.model";
import { MixedNumberImproperFractionProblem } from './mixedNumberToImproperFractionProblem';

export interface FractionProblems{
    basicMathProblems: BasicMathProblem[];
    multipleFractionProblem: MultipleFractionProblem[];
    mixedNumberImproperFractionProblem: MixedNumberImproperFractionProblem[];
}